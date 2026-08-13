import Arrow from "./Arrow";

export default function CTA() {
  return (
    <section id="contact" className="cta-section">
      <p className="eyebrow">Let’s talk</p>
      <h2>Have a technology challenge worth solving?</h2>
      <p>Bring us the business problem. We’ll help you define the right technical path forward.</p>
      <a className="button button-light" href="mailto:reachus@iniciotechnologies.com">Start a conversation <Arrow /></a>
    </section>
  );
}
