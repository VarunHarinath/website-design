import { locations } from "../data/services";

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="section-label"><span>05</span><span>About Inicio</span></div>
      <div className="about-grid reveal">
        <h2>An IT services organization built to be a technology ally.</h2>
        <div className="about-body">
          <p>Inicio Technologies provides a broad range of IT services and solutions, supported by experienced technology professionals. We help organizations resolve business challenges through application engineering, quality, data, operations and talent.</p>
          <p>Our aim is straightforward: bring technical capability, creativity and commitment to the work, while staying close enough to the business to make the solution useful.</p>
        </div>
      </div>
      <div className="presence">
        <p>Verified office presence</p>
        {locations.map((location) => <div key={location}><span>{location}</span><span aria-hidden="true">•</span></div>)}
      </div>
    </section>
  );
}
