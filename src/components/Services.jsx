import { services } from "../data/services";
import Arrow from "./Arrow";

export default function Services() {
  return (
    <section id="services" className="section services-section">
      <div className="section-label"><span>02</span><span>Services</span></div>
      <div className="services-layout">
        <div className="services-sticky reveal">
          <p className="eyebrow">A connected service portfolio</p>
          <h2>Specialists when you need depth. One partner when you need range.</h2>
          <a className="text-link" href="mailto:reachus@iniciotechnologies.com">Discuss your requirements <Arrow /></a>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <article className="service-item" key={service.number}>
              <span className="service-number">{service.number}</span>
              <div><h3>{service.title}</h3><p>{service.detail}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
