import { services, locations } from "../data/services";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div><div className="footer-logo"><span>I</span> INICIO</div><p>Technology services shaped around the way your business works.</p></div>
        <div><h3>Capabilities</h3>{services.slice(0, 4).map(s => <a key={s.number} href="#services">{s.title}</a>)}</div>
        <div><h3>Company</h3><a href="#about">About</a><a href="#approach">Approach</a><a href="#contact">Contact</a></div>
        <div><h3>Contact</h3><a href="mailto:reachus@iniciotechnologies.com">reachus@iniciotechnologies.com</a><a href="tel:+14698589080">+1 469 858 9080</a><a href="tel:+919866300619">+91 986 630 0619</a></div>
      </div>
      <div className="footer-locations">{locations.map(x => <span key={x}>{x}</span>)}</div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Inicio Technologies. All rights reserved.</span><a href="#top">Back to top ↑</a></div>
    </footer>
  );
}
