import { resources } from "../../data/resources";
import Arrow from "../Arrow";

export default function Insights() {
  return (
    <section className="insights-section" id="acumen"><div className="section-kicker"><span>06</span><span>Acumen</span></div><div className="insights-heading"><h2>Case Study || Web blogs</h2><p>Proven Success in Digital Engineering</p></div><div className="insight-grid">{resources.slice(0,3).map((item) => <article key={item.title}><span>{item.type}</span><h3>{item.title}</h3><a href="mailto:reachus@iniciotech.com" aria-label={`Ask about ${item.title}`}><Arrow /></a></article>)}</div></section>
  );
}
