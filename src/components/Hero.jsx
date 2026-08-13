import Arrow from "./Arrow";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-grid">
        <div className="hero-copy reveal">
          <p className="eyebrow">Technology services · Engineering · IT operations</p>
          <h1>Technology that works the way <em>business</em> does.</h1>
          <p className="hero-intro">We design, build and support practical technology solutions—bringing engineering discipline and personal attention to every engagement.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="mailto:reachus@iniciotechnologies.com">Start a conversation <Arrow /></a>
            <a className="text-link" href="#capabilities">Explore capabilities <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <figure className="hero-visual image-reveal">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=85" alt="Technology professionals collaborating around a table" fetchPriority="high" />
          <figcaption><span>Business understanding</span><span>Engineering execution</span></figcaption>
        </figure>
      </div>
      <div className="hero-foot"><span>From idea to dependable operation</span><span className="line" /></div>
    </section>
  );
}
