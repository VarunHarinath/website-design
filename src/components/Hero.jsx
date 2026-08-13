import Arrow from "./Arrow";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-grid hero-centered">
        <div className="hero-copy reveal">
          <p className="eyebrow">Technology services · Engineering · IT operations</p>
          <h1>Technology that works the way <em>business</em> does.</h1>
          <p className="hero-intro">We design, build and support practical technology solutions—bringing engineering discipline and personal attention to every engagement.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="mailto:reachus@iniciotechnologies.com">Start a conversation <Arrow /></a>
            <a className="text-link" href="#capabilities">Explore capabilities <span aria-hidden="true">↓</span></a>
          </div>
        </div>
      </div>
      <div className="hero-foot"><span>From idea to dependable operation</span><span className="line" /></div>
    </section>
  );
}
