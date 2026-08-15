#!/usr/bin/env python3
"""Build a read-only content inventory from InicioTech's public WordPress site."""

from concurrent.futures import ThreadPoolExecutor, as_completed
from html import unescape
from html.parser import HTMLParser
import json
import re
from pathlib import Path
from urllib.parse import urljoin, urlparse
from urllib.request import Request, urlopen

BASE = "https://iniciotech.com/"
OUTPUT = Path(__file__).resolve().parents[1] / "audit" / "source-inventory.json"
PUBLIC_OUTPUT = Path(__file__).resolve().parents[1] / "public" / "content" / "source-pages.json"


def fetch(url):
    request = Request(url, headers={"User-Agent": "InicioTech content audit/1.0"})
    with urlopen(request, timeout=30) as response:
        return response.read().decode("utf-8", errors="replace")


def normalize(value):
    return " ".join(unescape(value).replace("\xa0", " ").split()).strip()


class ContentParser(HTMLParser):
    content_tags = {"h1", "h2", "h3", "h4", "p", "li"}
    skip_tags = {"script", "style", "svg", "noscript"}

    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.skip_depth = 0
        self.current = None
        self.buffer = []
        self.items = []
        self.links = []

    def handle_starttag(self, tag, attrs):
        if tag in self.skip_tags:
            self.skip_depth += 1
            return
        if self.skip_depth:
            return
        attrs = dict(attrs)
        if tag == "a" and attrs.get("href"):
            self.links.append(attrs["href"])
        if tag in self.content_tags and self.current is None:
            self.current = tag
            self.buffer = []

    def handle_endtag(self, tag):
        if tag in self.skip_tags and self.skip_depth:
            self.skip_depth -= 1
            return
        if self.skip_depth:
            return
        if tag == self.current:
            text = normalize("".join(self.buffer))
            if text:
                self.items.append({"type": tag, "text": text})
            self.current = None
            self.buffer = []

    def handle_data(self, data):
        if not self.skip_depth and self.current:
            self.buffer.append(data)


def classify(slug):
    groups = {
        "company": {"about-us", "contact-us", "job-openings", "program-and-learning", "privacy-policy"},
        "industry": {"bfsi", "travel-transportation-amp-hospitality", "energy-amp-utilities", "healthcare-amp-life-sciences", "industries"},
        "resource": {"blog", "case-studies"},
        "digital-engineering": {"data-engineering", "application-modernization", "cloud-migration-amp-transformation", "intelligent-automation", "data-mtmga", "devsecops", "site-reliability", "cyber-security", "cloud-services", "digital-solutions", "digital-transformation"},
        "quality-engineering": {"quality-engineering", "quality-engineering-2", "quality-engineering-digital-assurance", "next-gen-testing-services", "ai-ml", "devops", "cloud-assurance", "rpa", "low-code-no-code-automation", "functional", "compatibility", "regression", "accessibility", "automation", "performance", "ui-ux", "security"},
        "advisory-transformation": {"advisory-amp-transformation", "advisory-services", "business-function-analysis", "agile-centre-of-excellence", "cybersecurity-risk-analysis", "data-governance-strategy-amp-solution", "test-advisory-amp-transformation"},
        "human-capital": {"human-capital-upskilling", "software-development-engineer-in-test", "low-code-no-code-development-amp-testing"},
        "technology": {"our-technologies"},
    }
    return next((group for group, slugs in groups.items() if slug in slugs), "other")


def parse_page(record):
    html = fetch(record["link"])
    parser = ContentParser()
    parser.feed(html)
    seen = set()
    items = []
    for item in parser.items:
        key = (item["type"], item["text"])
        if key not in seen:
            seen.add(key)
            items.append(item)
    internal_links = []
    for href in parser.links:
        absolute = urljoin(record["link"], href)
        parsed = urlparse(absolute)
        if parsed.netloc in {"iniciotech.com", "www.iniciotech.com"} and absolute not in internal_links:
            internal_links.append(absolute)
    return {
        "kind": record["kind"],
        "slug": record["slug"],
        "title": normalize(re.sub(r"<[^>]+>", "", record["title"]["rendered"])),
        "url": record["link"],
        "category": classify(record["slug"]) if record["kind"] == "page" else "resource-post",
        "content": items,
        "internalLinks": internal_links,
    }


def api_records(endpoint, kind):
    records = json.loads(fetch(f"{BASE}wp-json/wp/v2/{endpoint}?per_page=100&_fields=slug,link,title"))
    for record in records:
        record["kind"] = kind
    return records


def main():
    records = api_records("pages", "page") + api_records("posts", "post")
    pages = []
    with ThreadPoolExecutor(max_workers=8) as pool:
        futures = {pool.submit(parse_page, record): record for record in records}
        for future in as_completed(futures):
            try:
                pages.append(future.result())
            except Exception as exc:
                record = futures[future]
                pages.append({"kind": record["kind"], "slug": record["slug"], "title": record["title"]["rendered"], "url": record["link"], "error": str(exc)})
    pages.sort(key=lambda page: (page.get("kind", ""), page.get("category", ""), page.get("slug", "")))
    inventory = {
        "source": BASE,
        "pageCount": sum(page.get("kind") == "page" for page in pages),
        "postCount": sum(page.get("kind") == "post" for page in pages),
        "errorCount": sum("error" in page for page in pages),
        "pages": pages,
    }
    OUTPUT.parent.mkdir(exist_ok=True)
    OUTPUT.write_text(json.dumps(inventory, indent=2, ensure_ascii=False) + "\n")
    source_pages = {}
    footer_marker = "Inicio Tech is a growing global network for Information Technology (IT) services"
    for page in pages:
        if "error" in page:
            continue
        content = page.get("content", [])
        start = next((index for index, item in enumerate(content) if item["type"] == "h1"), 0)
        content = content[start:]
        end = next((index for index, item in enumerate(content[1:], 1) if item["text"].startswith(footer_marker)), len(content))
        content = [item for item in content[:end] if item["text"] not in {"Home", page["title"]}]
        first_heading = next((item["text"] for item in content if item["type"] in {"h1", "h2"}), page["title"])
        first_description = next((item["text"] for item in content if item["type"] == "p"), "")
        source_pages[page["slug"]] = {
            "slug": page["slug"],
            "kind": page["kind"],
            "category": page.get("category", "other"),
            "title": page["title"],
            "sourcePath": urlparse(page["url"]).path,
            "sourceUrl": page["url"],
            "heroHeading": first_heading,
            "heroDescription": first_description,
            "content": content,
        }
    PUBLIC_OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    PUBLIC_OUTPUT.write_text(json.dumps(source_pages, indent=2, ensure_ascii=False) + "\n")
    print(json.dumps({key: inventory[key] for key in ("source", "pageCount", "postCount", "errorCount")}, indent=2))


if __name__ == "__main__":
    main()
