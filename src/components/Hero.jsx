export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-media" aria-hidden="true">
        <img src="/hero-team.jpg" alt="" fetchPriority="high" />
      </div>
      <div className="hero-grid hero-centered">
        <div className="hero-copy reveal">
          <h1>Technology that works the way <em>business</em> does.</h1>
        </div>
      </div>
    </section>
  );
}
