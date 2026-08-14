import { whyInicio, company } from "../../data/company";

export default function WhyInicio() {
  return (
    <section className="why-section" id="about"><div className="section-kicker"><span>05</span><span>Why Choose Us</span></div><div className="why-intro"><h2>Why Choose Us</h2><p>Choosing Inicio Tech means partnering with a team that is committed to your success.</p></div><div className="why-rows">{whyInicio.map(([title,copy],i) => <article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
  );
}
