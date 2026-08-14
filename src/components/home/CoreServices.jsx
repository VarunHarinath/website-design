import { coreServices } from "../../data/services";
import Arrow from "../Arrow";

export default function CoreServices() {
  return (
    <section className="core-services" aria-label="Core services">
      {coreServices.map((service) => (
        <a className="service-panel" href="#capabilities" key={service.title}>
          <img loading="lazy" src={service.image} alt="" />
          <span className="panel-shade" />
          <div className="panel-number">{service.number}</div>
          <div className="panel-content"><p>{service.title}</p><h3>{service.statement}</h3><Arrow /></div>
        </a>
      ))}
    </section>
  );
}
