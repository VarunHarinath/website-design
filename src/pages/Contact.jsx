import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { company } from "../data/company";

export default function Contact() {
  return <><Header /><main className="contact-page"><p>Contact Us</p><h1>Let's Talk About<br />Your Project.</h1><div className="contact-page-grid"><a href={`mailto:${company.email}`}>{company.email}</a><a href="tel:+14698589080">{company.phone}</a>{company.locations.map((location) => <div key={location.region}><strong>{location.region} Office Contacts</strong><p>{location.address}</p></div>)}</div></main><Footer /></>;
}
