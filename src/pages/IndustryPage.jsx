import { Link, useParams } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Arrow from "../components/Arrow";
import { industries, industryBySlug } from "../data/industries";

export default function IndustryPage() {
  const { slug } = useParams();
  const industry = industryBySlug[slug];

  if (!industry) {
    return <><Header /><main className="contact-page"><p>Industry not found</p><h1>That page is not available.</h1><Link to="/">Return home</Link></main><Footer /></>;
  }

  const related = industries.filter((item) => item.slug !== industry.slug).slice(0, 3);
  const focusHeading = industry.slug === "bfsi" ? "Banking Solutions: Digital-First, Customer-Centric Approach" : industry.concise ? "How We Serve Your Industry" : `Challenges in the ${industry.title} Industry`;

  return (
    <div className="industry-page">
      <Header />
      <main>
        <section className="industry-hero">
          <div className="industry-hero-copy">
            <p>{industry.eyebrow}</p>
            <h1>{industry.title}</h1>
            <strong>{industry.statement}</strong>
          </div>
          <div className="industry-hero-art" aria-hidden="true"><span>Industry</span><i /><b>{industry.title.slice(0, 2).toUpperCase()}</b></div>
        </section>

        <section className="industry-overview">
          <div className="section-kicker"><span>01</span><span>{industry.title}</span></div>
          <div><h2>{industry.statement}</h2><p>{industry.overview}</p></div>
        </section>

        <section className="industry-focus">
          <div><p>{industry.title}</p><h2>{focusHeading}</h2></div>
          <div className="industry-focus-list">{industry.focus.map(([title, copy], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
        </section>

        <section className="industry-solutions">
          <div className="section-kicker light"><span>02</span><span>Our Solutions</span></div>
          <h2>Our Solutions</h2>
          <div>{industry.solutions.map(([title, copy], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
        </section>

        <section className="industry-domain-band"><p>Business areas</p><div>{industry.domains.map((item) => <span key={item}>{item}</span>)}</div></section>

        <section className="related-capabilities"><p>Who We Serve</p><div>{related.map((item) => <Link to={`/industries/${item.slug}`} key={item.slug}><span>{item.eyebrow}</span><h3>{item.title}</h3><Arrow /></Link>)}</div></section>
      </main>
      <Footer />
    </div>
  );
}
