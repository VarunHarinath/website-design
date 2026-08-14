import { company } from "../../data/company";

export default function Impact() {
  return (
    <section className="impact-section"><div className="section-kicker"><span>03</span><span>Impact</span></div><h2>Our Impact in Numbers</h2><div className="impact-grid">{company.metrics.map(([value,label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div></section>
  );
}
