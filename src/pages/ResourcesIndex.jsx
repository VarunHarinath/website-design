import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Arrow from "../components/Arrow";

const caseStudies = new Set(["ai-powered-test-automation-for-self-service-kiosks", "from-delays-to-departures-how-data-engineering-enhanced-airline-operational-efficiency"]);

export default function ResourcesIndex() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("/content/source-pages.json").then((response) => response.json()).then((data) => setPosts(Object.values(data).filter((page) => page.kind === "post")));
  }, []);
  return <><Header /><main className="catalog-page"><section className="catalog-hero"><p>Acumen</p><h1>Resources</h1><strong>Stay Ahead with Industry Trends</strong></section><section className="resource-catalog"><div className="section-kicker"><span>01</span><span>Case Studies & Web Blogs</span></div><div>{posts.map((post) => <article key={post.slug}><span>{caseStudies.has(post.slug) ? "Case Study" : "Web Blog"}</span><h2>{post.title}</h2><p>{post.heroDescription}</p><Link to={`/resources/${post.slug}`} aria-label={`Read ${post.title}`}><Arrow /></Link></article>)}</div></section></main><Footer /></>;
}
