import { Link, Navigate, useParams } from "react-router-dom";
import { capabilityBySlug, capabilities } from "../data/capabilities";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Arrow from "../components/Arrow";

export default function CapabilityPage({ forcedSlug }) {
  const { slug: routeSlug } = useParams();
  const slug = forcedSlug || routeSlug;
  const capability = capabilityBySlug[slug];
  if (!capability) return <Navigate to="/" replace />;

  const pageTitle = forcedSlug === "engineering" ? "Digital Engineering" : capability.title;
  const related = capabilities.filter((item) => item.slug !== slug).slice(0, 3);
  return (
    <><Header overlay /><main className="detail-page">
      <section className="detail-hero"><img src={capability.image} alt="" /><span className="detail-shade" /><div><p>{capability.eyebrow}</p><h1>{pageTitle}</h1><strong>{capability.statement}</strong></div></section>
      <section className="detail-intro"><div className="detail-intro-label"><span>Overview</span><i /></div><p>{capability.overview}</p></section>
      {capability.reasons && <section className="detail-reasons"><div><p>Digital Engineering</p><h2>Why Choose Us for Digital Engineering?</h2></div><div>{capability.reasons.map(([title, copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div></section>}
      <section className="detail-services"><div><p>Our Capabilities</p><h2>{pageTitle}</h2></div><div className="detail-service-list">{capability.services.map(([title,copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
      <section className="benefit-band"><p>Features</p><div>{capability.benefits.map((benefit) => <span key={benefit}>{benefit}</span>)}</div></section>
      <section className="related-capabilities"><p>What We Do</p><div>{related.map((item) => <Link key={item.slug} to={`/capabilities/${item.slug}`}><h3>{item.title}</h3><Arrow /></Link>)}</div></section>
      <section className="contact-band"><p>Let's Talk About Your Project.</p><h2>Get in touch with Que Techo today to discuss your IT needs and how we can help your business thrive!</h2><a href="mailto:HR@Quetecho.com">Contact Us <Arrow /></a></section>
    </main><Footer /></>
  );
}
