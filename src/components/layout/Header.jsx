import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { capabilities } from "../../data/capabilities";
import { serviceGroups } from "../../data/sourceCatalog";
import { industries } from "../../data/industries";
import useActiveSection from "../../hooks/useActiveSection";
import Arrow from "../Arrow";
import Logo from "./Logo";

const nav = [
  { label: "AI", section: "ai" },
  { label: "Services", section: "services", to: "/services", menu: "services" },
  { label: "Capabilities", section: "capabilities", menu: "capabilities" },
  { label: "Industries", section: "industries", menu: "industries" },
  { label: "Acumen", section: "acumen", to: "/resources", menu: "acumen" },
  { label: "About Us", section: "about", to: "/company/about-us" },
];

const homeSections = ["ai", "services", "capabilities", "industries", "about", "acumen"];

export default function Header({ overlay = false }) {
  const [menu, setMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const active = useActiveSection(homeSections);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenu(null); setMobileOpen(false); }, [pathname]);

  const itemHref = (item) => {
    if (pathname === "/" && item.section) return `#${item.section}`;
    return item.to || `/#${item.section}`;
  };

  const itemIsActive = (item) => (
    (pathname === "/" && active === item.section)
    || pathname === item.to
    || (item.label === "Services" && pathname.startsWith("/services/"))
    || (item.label === "Acumen" && pathname.startsWith("/resources/"))
    || (item.label === "About Us" && pathname.startsWith("/company/"))
    || (item.label === "AI" && pathname === "/capabilities/ai-led-process-solutions")
    || (item.label === "Industries" && pathname.startsWith("/industries/"))
    || (item.label === "Capabilities" && pathname.startsWith("/capabilities/") && pathname !== "/capabilities/ai-led-process-solutions")
  );

  return (
    <>
      <div className={`utility-bar ${overlay ? "utility-on-dark" : ""}`}><Link to="/careers">Careers</Link><Link to="/contact">Contact Us</Link></div>
      <header className={`global-header ${overlay ? "header-on-dark" : ""} ${scrolled || menu || mobileOpen ? "header-solid" : ""}`} onMouseLeave={() => setMenu(null)}>
        <Logo light={overlay && !scrolled && !menu && !mobileOpen} />
        <nav className="primary-nav" aria-label="Primary navigation">
          {nav.map((item) => (
            <a key={item.label} href={itemHref(item)} className={itemIsActive(item) ? "active" : ""} aria-current={itemIsActive(item) ? "location" : undefined} onMouseEnter={() => setMenu(item.menu || null)} onFocus={() => setMenu(item.menu || null)}>
              {item.label}{item.menu && <span className="nav-plus">+</span>}
            </a>
          ))}
        </nav>
        <Link className="header-conversation" to="/contact">Contact Us <Arrow /></Link>
        <button className="menu-button" aria-expanded={mobileOpen} aria-label="Toggle navigation" onClick={() => setMobileOpen((value) => !value)}><span /><span /></button>

        <div className={`mega-menu ${menu ? "mega-open" : ""}`}>
          {menu === "capabilities" && <MegaGroup title="Capabilities" allTo="/#capabilities" items={capabilities.map((item) => ({ label: item.title, to: `/capabilities/${item.slug}` }))} />}
          {menu === "services" && <ServiceMega />}
          {menu === "industries" && <MegaGroup title="Industries" allTo="/#industries" items={industries.map((item) => ({ label: item.title, to: `/industries/${item.slug}` }))} />}
          {menu === "acumen" && <MegaGroup title="Acumen" allTo="/resources" items={[{ label: "Web Blogs", to: "/resources/blog" }, { label: "Case Studies", to: "/resources/case-studies" }]} />}
        </div>

        <div className={`mobile-menu ${mobileOpen ? "mobile-open" : ""}`}>
          {nav.map((item) => <a href={itemHref(item)} className={itemIsActive(item) ? "active" : ""} aria-current={itemIsActive(item) ? "location" : undefined} key={item.label} onClick={() => setMobileOpen(false)}>{item.label}<span>{item.menu ? "+" : ""}</span></a>)}
          <Link to="/contact">Contact Us <Arrow /></Link>
        </div>
      </header>
    </>
  );
}

function MegaGroup({ title, items, allTo }) {
  return (
    <div className="mega-inner">
      <div className="mega-title"><span>{title}</span><Link to={allTo}>See All <Arrow /></Link></div>
      <div className="mega-columns">
        {items.map((item) => (
          <div className="mega-column" key={item.label}>
            <Link to={item.to}>{item.label}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

function ServiceMega() {
  return <div className="mega-inner"><div className="mega-title"><span>Services</span><Link to="/services">See All <Arrow /></Link></div><div className="mega-columns service-mega-columns">{serviceGroups.map((group) => <div className="mega-column" key={group.title}><Link to={`/services/${group.overviewSlug}`}>{group.title}</Link>{group.items.slice(0, 7).map(([title, slug]) => <Link className="mega-sub-link" to={`/services/${slug}`} key={title}>{title}</Link>)}</div>)}</div></div>;
}
