import { Link } from "react-router-dom";
import { capabilities } from "../../data/capabilities";
import Arrow from "../Arrow";

export default function CapabilitiesGrid() {
  return (
    <section className="capabilities-editorial" id="capabilities">
      <div className="section-kicker light"><span>02</span><span>Capabilities</span></div>
      <div className="capabilities-heading"><h2>Our Capabilities</h2><p>Inicio Tech offers a wide range of services to cater to all your IT consulting needs.</p></div>
      <div className="capability-grid">
        {capabilities.map((item) => (
          <Link className="capability-tile" to={`/capabilities/${item.slug}`} key={item.slug}>
            <span>{item.number}</span><h3>{item.title}</h3><p>{item.statement}</p><Arrow />
            <img loading="lazy" src={item.image} alt="" />
          </Link>
        ))}
      </div>
    </section>
  );
}
