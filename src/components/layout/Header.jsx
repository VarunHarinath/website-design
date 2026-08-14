import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { capabilities } from "../../data/capabilities";
import { coreServices } from "../../data/services";
import { industries } from "../../data/industries";
import useActiveSection from "../../hooks/useActiveSection";
import Arrow from "../Arrow";
import Logo from "./Logo";

const nav = [
  { label: "AI", section: "ai" },
  { label: "Services", section: "engineering", menu: "services" },
  { label: "Capabilities", section: "capabilities", menu: "capabilities" },
  { label: "Industries", section: "industries", menu: "industries" },
  { label: "Acumen", section: "acumen" },
  { label: "About Us", section: "about" },
];

export default function Header() {
  const [menu, setMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const active = useActiveSection(["ai", "engineering", "capabilities", "industries", "acumen", "about"]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenu(null); setMobileOpen(false); }, [pathname]);

  const go = (section) => pathname === "/" ? `#${section}` : `/#${section}`;

  return (
    <>
      <div className="utility-bar"><a href="/#careers">Careers</a><a href="mailto:reachus@iniciotech.com">Contact Us</a></div>
      <header className={`global-header ${scrolled || menu || mobileOpen ? "header-solid" : ""}`} onMouseLeave={() => setMenu(null)}>
        <Logo light={!scrolled && !menu && !mobileOpen} />
        <nav className="primary-nav" aria-label="Primary navigation">
          {nav.map((item) => (
            <a key={item.label} href={item.to || go(item.section)} className={active === item.section || pathname === item.to || (item.label === "AI" && pathname === "/capabilities/ai-led-process-solutions") || (item.label === "Industries" && pathname.startsWith("/industries/")) || (item.label === "Capabilities" && pathname.startsWith("/capabilities/") && pathname !== "/capabilities/ai-led-process-solutions") ? "active" : ""} onMouseEnter={() => setMenu(item.menu || null)} onFocus={() => setMenu(item.menu || null)}>
              {item.label}{item.menu && <span className="nav-plus">+</span>}
            </a>
          ))}
        </nav>
        <a className="header-conversation" href="mailto:reachus@iniciotech.com">Contact Us <Arrow /></a>
        <button className="menu-button" aria-expanded={mobileOpen} aria-label="Toggle navigation" onClick={() => setMobileOpen((value) => !value)}><span /><span /></button>

        <div className={`mega-menu ${menu ? "mega-open" : ""}`}>
          {menu === "capabilities" && <MegaGroup title="Capabilities" items={capabilities.map((item) => ({ label: item.title, to: `/capabilities/${item.slug}` }))} />}
          {menu === "services" && <MegaGroup title="Services" items={coreServices.map((item) => ({ label: item.title, to: `/#engineering` }))} detailed={coreServices} />}
          {menu === "industries" && <MegaGroup title="Industries" items={industries.map((item) => ({ label: item.title, to: `/industries/${item.slug}` }))} />}
        </div>

        <div className={`mobile-menu ${mobileOpen ? "mobile-open" : ""}`}>
          {nav.map((item) => <a href={item.to || go(item.section)} key={item.label} onClick={() => setMobileOpen(false)}>{item.label}<span>{item.menu ? "+" : ""}</span></a>)}
          <Link to="/contact">Contact Us <Arrow /></Link>
        </div>
      </header>
    </>
  );
}

function MegaGroup({ title, items, detailed }) {
  return (
    <div className="mega-inner">
      <div className="mega-title"><span>{title}</span><a href={`/#${title.toLowerCase()}`}>See All <Arrow /></a></div>
      <div className="mega-columns">
        {items.map((item, index) => (
          <div className="mega-column" key={item.label}>
            <Link to={item.to}>{item.label}</Link>
            {detailed?.[index]?.items.slice(0, 7).map((sub) => <span key={sub}>{sub}</span>)}
          </div>
        ))}
      </div>
    </div>
  );
}
