import { useEffect, useMemo, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Arrow from "../components/Arrow";

export default function SourcePage({ fixedSlug }) {
  const { slug: routeSlug } = useParams();
  const slug = fixedSlug || routeSlug;
  const [catalog, setCatalog] = useState(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let active = true;
    fetch("/content/source-pages.json")
      .then((response) => {
        if (!response.ok) throw new Error("Content inventory unavailable");
        return response.json();
      })
      .then((data) => active && setCatalog(data))
      .catch(() => active && setFailed(true));
    return () => { active = false; };
  }, []);

  const page = catalog?.[slug];
  const body = useMemo(() => page?.content?.filter((item, index) => !(index === 0 && item.type === "h1")) || [], [page]);

  if (failed) return <Navigate to="/" replace />;
  if (!catalog) return <div className="source-loading" role="status">Loading Que Techo content…</div>;
  if (!page) return <Navigate to="/" replace />;

  return (
    <div className="source-page">
      <Header />
      <main>
        <section className="source-hero">
          <p>{page.category.replaceAll("-", " ")}</p>
          <h1>{page.heroHeading || page.title}</h1>
          {page.heroDescription && <strong>{page.heroDescription}</strong>}
        </section>
        <section className="source-content">
          <div className="source-meta"><span>Que Techo</span><span>{page.category.replaceAll("-", " ")}</span></div>
          <div className="source-flow"><ContentFlow items={body} /></div>
        </section>
        <section className="contact-band"><p>Let's Talk About Your Project.</p><h2>Get in touch with Que Techo today to discuss your IT needs and how we can help your business thrive!</h2><Link to="/contact">Contact Us <Arrow /></Link></section>
      </main>
      <Footer />
    </div>
  );
}

export function ContentFlow({ items }) {
  const output = [];
  let list = [];
  const flushList = () => {
    if (!list.length) return;
    output.push(<ul key={`list-${output.length}`}>{list.map((text) => <li key={text}>{text}</li>)}</ul>);
    list = [];
  };

  items.forEach((item, index) => {
    if (item.type === "li") {
      list.push(item.text);
      return;
    }
    flushList();
    if (item.type === "h2") output.push(<h2 key={`${item.type}-${index}`}>{item.text}</h2>);
    else if (item.type === "h3" || item.type === "h4") output.push(<h3 key={`${item.type}-${index}`}>{item.text}</h3>);
    else if (item.type === "p") output.push(<p key={`${item.type}-${index}`}>{item.text}</p>);
  });
  flushList();
  return output;
}
