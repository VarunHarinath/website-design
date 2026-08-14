import { Link } from "react-router-dom";
import { capabilities } from "../../data/capabilities";
import { coreServices } from "../../data/services";
import { industries } from "../../data/industries";
import { company } from "../../data/company";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="global-footer">
      <div className="footer-lead"><Logo light /><p>{company.summary}</p></div>
      <div className="footer-map">
        <FooterColumn title="Capabilities">{capabilities.map((item) => <Link key={item.slug} to={`/capabilities/${item.slug}`}>{item.title}</Link>)}</FooterColumn>
        <FooterColumn title="Services">{coreServices.map((item) => <a key={item.title} href="/#engineering">{item.title}</a>)}</FooterColumn>
        <FooterColumn title="Industries">{industries.map((item) => <Link key={item.slug} to={`/industries/${item.slug}`}>{item.title}</Link>)}</FooterColumn>
        <FooterColumn title="Company"><a href="/#about">About Us</a><a href="/#careers">Careers</a><a href="/#acumen">Resources</a><Link to="/contact">Contact</Link></FooterColumn>
      </div>
      <div className="footer-offices">{company.locations.map((location) => <div key={location.region}><strong>{location.region}</strong><p>{location.address}</p></div>)}</div>
      <div className="footer-legal"><span>Copyright © 2026 Inicio Tech</span><a href="#privacy">Privacy Policy</a><a href="mailto:reachus@iniciotech.com">{company.email}</a></div>
    </footer>
  );
}

function FooterColumn({ title, children }) { return <div className="footer-column"><h3>{title}</h3>{children}</div>; }
