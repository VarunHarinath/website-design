import { whyQueTecho } from "../../data/company";

export default function WhyQueTecho() {
  return (
    <section className="why-section" id="about"><div className="why-intro"><h2>Why Choose Us</h2><p>Choosing Que Techo means partnering with a team that is committed to your success.</p></div><div className="why-rows">{whyQueTecho.map(([title,copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
  );
}
