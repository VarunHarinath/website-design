import { resources } from "../../data/resources";
import Arrow from "../Arrow";
import { Link } from "react-router-dom";

export default function Insights() {
  const [featured, ...secondary] = resources.slice(0, 3);
  return (
    <section className="insights-section" id="acumen">
      <div className="insights-heading"><h2>Case Study <em>Web blogs</em></h2><div><p>Proven Success in Digital Engineering</p><Link to="/resources">View all resources <Arrow /></Link></div></div>
      <div className="insight-editorial">
        <Link className="insight-featured" to={`/resources/${featured.slug}`}>
          <span>{featured.type}</span><i aria-hidden="true" /><h3>{featured.title}</h3><Arrow />
        </Link>
        <div className="insight-secondary">
          {secondary.map((item) => <Link to={`/resources/${item.slug}`} key={item.title}><span>{item.type}</span><h3>{item.title}</h3><Arrow /></Link>)}
        </div>
      </div>
    </section>
  );
}
