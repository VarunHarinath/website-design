import { Link } from "react-router-dom";
import { capabilities } from "../../data/capabilities";
import { industries } from "../../data/industries";
import { company } from "../../data/company";
import { serviceGroups } from "../../data/sourceCatalog";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="global-footer">
      <div className="footer-lead"><Logo light /><p>{company.summary}</p></div>
      <div className="footer-map">
        <FooterColumn title="Capabilities">{capabilities.map((item) => <Link key={item.slug} to={`/capabilities/${item.slug}`}>{item.title}</Link>)}</FooterColumn>
        <FooterColumn title="Services">{serviceGroups.map((item) => <Link key={item.title} to={`/services/${item.overviewSlug}`}>{item.title}</Link>)}</FooterColumn>
        <FooterColumn title="Industries">{industries.map((item) => <Link key={item.slug} to={`/industries/${item.slug}`}>{item.title}</Link>)}</FooterColumn>
        <FooterColumn title="Company"><Link to="/company/about-us">About Us</Link><Link to="/careers">Careers</Link><Link to="/learning">Program &amp; Learning</Link><Link to="/technologies">Our Technologies</Link><Link to="/company/engagement-models-consulting">Engagement Models</Link><Link to="/resources">Resources</Link><Link to="/contact">Contact</Link></FooterColumn>
      </div>
      <div className="footer-offices">{company.locations.map((location) => <div key={location.region}><strong>{location.region}</strong><p>{location.address}</p></div>)}</div>
      <div className="footer-legal"><span>© 2026 Que Techo. All rights reserved.</span><Link to="/company/privacy-policy">Privacy Policy</Link><a href={`mailto:${company.email}`}>{company.email}</a></div>
    </footer>
  );
}

function FooterColumn({ title, children }) { return <div className="footer-column"><h3>{title}</h3>{children}</div>; }
