import { services } from "../data/services";

export default function Capabilities() {
  return (
    <section id="capabilities" className="section capabilities">
      <div className="section-label"><span>01</span><span>What we do</span></div>
      <div className="statement-grid reveal">
        <h2>We build, modernize and support the technology businesses depend on.</h2>
        <p>Our capabilities span software delivery, quality, data, cloud, infrastructure and talent—organized around the challenge, not a preset package.</p>
      </div>
      <div className="capability-index">
        {services.slice(0, 4).map((service) => (
          <a href="#services" className="capability-row" key={service.number}>
            <span>{service.number}</span><h3>{service.title}</h3><p>{service.short}</p><span aria-hidden="true">↘</span>
          </a>
        ))}
      </div>
    </section>
  );
}
