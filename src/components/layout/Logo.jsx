import { Link } from "react-router-dom";

export default function Logo({ light = false }) {
  return (
    <Link className={`brand ${light ? "brand-light" : ""}`} to="/" aria-label="Inicio Tech home">
      <span className="brand-mark">I</span>
      <span>INICIO<span className="brand-sub">TECHNOLOGIES</span></span>
    </Link>
  );
}
