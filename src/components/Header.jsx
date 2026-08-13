"use client";

import { useEffect, useState } from "react";
import Arrow from "./Arrow";

const links = [
  ["Capabilities", "#capabilities"],
  ["Services", "#services"],
  ["Approach", "#approach"],
  ["About", "#about"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled || open ? "is-solid" : ""}`}>
      <a className="brand" href="#top" aria-label="Inicio Technologies home">
        <span className="brand-mark">I</span>
        <span>INICIO<span className="brand-sub">TECHNOLOGIES</span></span>
      </a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
      </nav>
      <a className="header-cta" href="mailto:reachus@iniciotechnologies.com">Start a conversation <Arrow /></a>
      <button className="menu-button" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
        <span className="sr-only">Toggle menu</span><span /><span />
      </button>
      <nav id="mobile-menu" className={`mobile-nav ${open ? "is-open" : ""}`} aria-label="Mobile navigation">
        {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}<Arrow /></a>)}
        <a href="mailto:reachus@iniciotechnologies.com">reachus@iniciotechnologies.com</a>
      </nav>
    </header>
  );
}
