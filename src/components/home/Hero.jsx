import Arrow from "../Arrow";

export default function Hero() {
  return (
    <section className="cof-hero" id="top">
      <div className="cof-hero-content">
        <div className="hero-copy">
          <p>Quality Engineering</p>
          <h1>Minimizing Risk.<br />Maximizing Software<br /><em>Performance.</em></h1>
        </div>
        <div className="hero-system" aria-hidden="true">
          <span className="system-orbit orbit-one" />
          <span className="system-orbit orbit-two" />
          <div className="system-card system-card-left"><strong>Build</strong></div>
          <div className="system-card system-card-main"><strong>Assure</strong><i /></div>
          <div className="system-card system-card-right"><strong>Operate</strong></div>
          <span className="system-base" />
        </div>
        <div className="cof-hero-bottom">
          <p>Our comprehensive testing services cover every aspect, from functionality to performance and security. We empower you to deliver exceptional user experiences and achieve your business goals.</p>
          <a href="mailto:HR@Quetecho.com">Contact Us <Arrow /></a>
        </div>
      </div>
    </section>
  );
}
