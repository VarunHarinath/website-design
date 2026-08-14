import { industries } from "../../data/industries";
import Arrow from "../Arrow";

export default function Industries() {
  return (
    <section className="industries-section" id="industries">
      <div className="industries-image"><img loading="lazy" src="/industries.jpg" alt="Modern enterprise architecture" /></div>
      <div className="industries-content"><div className="section-kicker light"><span>04</span><span>Industries</span></div><h2>Who We Serve</h2><div className="industry-list">{industries.map((item) => <a href={`/industries/${item.slug}`} key={item.slug}><span>{item.title}</span><p>{item.copy}</p><Arrow /></a>)}</div></div>
    </section>
  );
}
