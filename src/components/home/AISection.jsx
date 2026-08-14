import { Link } from "react-router-dom";
import Arrow from "../Arrow";

const applications = ["AI-Powered Automation", "Machine Learning Model Development", "Natural Language Processing (NLP)", "Computer Vision Solutions"];

export default function AISection() {
  return (
    <section className="ai-intro" id="ai">
      <div className="section-kicker"><span>AI</span><span>AI/ML Services</span></div>
      <div className="ai-intro-grid">
        <div>
          <p>AI/ML Services</p>
          <h2>Transforming Businesses with Intelligent Automation</h2>
        </div>
        <div className="ai-intro-copy">
          <p>At Inicio, we help businesses harness the potential of Artificial Intelligence (AI) and Machine Learning (ML) to drive innovation, enhance efficiency, and gain actionable insights. Our AI/ML solutions are designed to automate processes, optimize decision-making, and create intelligent systems that adapt and evolve with data.</p>
          <Link to="/capabilities/ai-led-process-solutions">Our AI/ML Capabilities <Arrow /></Link>
        </div>
      </div>
      <div className="ai-applications">{applications.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong></div>)}</div>
    </section>
  );
}
