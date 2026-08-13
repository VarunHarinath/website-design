const systems = ["Application engineering", "Quality engineering", "Data solutions", "Cloud computing", "DevOps", "Cybersecurity", "Network management"];

export default function TechnologySection() {
  return (
    <section className="technology-section">
      <div className="tech-inner">
        <div className="section-label light"><span>04</span><span>Engineering foundations</span></div>
        <div className="tech-heading reveal">
          <h2>Engineering for the systems businesses rely on.</h2>
          <p>Modern technology is only useful when it is dependable, secure and maintainable. Our service mix connects software, infrastructure and operations to support the complete environment.</p>
        </div>
        <div className="tech-grid">
          <figure className="server-image image-reveal">
            <img loading="lazy" src="https://images.unsplash.com/photo-1667264501379-c1537934c7ab?auto=format&fit=crop&w=1400&q=85" alt="Organized server and network infrastructure in a data center" />
          </figure>
          <div className="systems-list">
            {systems.map((item, i) => <div key={item}><span>0{i + 1}</span><strong>{item}</strong></div>)}
          </div>
        </div>
      </div>
    </section>
  );
}
