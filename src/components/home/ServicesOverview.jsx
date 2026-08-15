import { Link } from "react-router-dom";
import { serviceGroups } from "../../data/sourceCatalog";
import Arrow from "../Arrow";

export default function ServicesOverview() {
  return (
    <section className="services-overview" id="services">
      <div className="services-overview-intro">
        <h2>Empowering Your Digital Future with Cutting-Edge Solutions</h2>
        <p>Unlock the potential of technology and innovation to drive transformation and growth.</p>
      </div>
      <div className="services-overview-list">
        {serviceGroups.map((group) => (
          <Link to={`/services/${group.overviewSlug}`} key={group.title}>
            <h3>{group.title}</h3>
            <p>{group.items.slice(0, 4).map(([title]) => title).join(" · ")}</p>
            <Arrow />
          </Link>
        ))}
      </div>
      <Link className="services-overview-all" to="/services">Explore all services <Arrow /></Link>
    </section>
  );
}
