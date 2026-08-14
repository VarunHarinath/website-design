import { Link, Navigate, useParams } from "react-router-dom";
import { capabilityBySlug, capabilities } from "../data/capabilities";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Arrow from "../components/Arrow";

export default function CapabilityPage() {
  const { slug } = useParams();
  const capability = capabilityBySlug[slug];
  if (!capability) return <Navigate to="/" replace />;

  const related = capabilities.filter((item) => item.slug !== slug).slice(0, 3);
  return (
    <><Header /><main className="detail-page">
      <section className="detail-hero"><img src={capability.image} alt="" /><span className="detail-shade" /><div><p>{capability.eyebrow}</p><h1>{capability.title}</h1><strong>{capability.statement}</strong></div></section>
      <section className="detail-intro"><div className="section-kicker"><span>{capability.number}</span><span>{capability.title}</span></div><h2>{capability.overview}</h2></section>
      <section className="detail-services"><div><p>Our Capabilities</p><h2>{capability.title}</h2></div><div className="detail-service-list">{capability.services.map(([title,copy],i) => <article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
      <section className="benefit-band"><p>Features</p><div>{capability.benefits.map((benefit) => <span key={benefit}>{benefit}</span>)}</div></section>
      <section className="related-capabilities"><p>What We Do</p><div>{related.map((item) => <Link key={item.slug} to={`/capabilities/${item.slug}`}><span>{item.number}</span><h3>{item.title}</h3><Arrow /></Link>)}</div></section>
      <section className="contact-band"><p>Let's Talk About Your Project.</p><h2>Get in touch with Inicio Tech today to discuss your IT needs and how we can help your business thrive!</h2><a href="mailto:reachus@iniciotech.com">Contact Us <Arrow /></a></section>
    </main><Footer /></>
  );
}
