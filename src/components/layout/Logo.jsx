import { Link } from "react-router-dom";
import logo from "../../assets/brand/que-techo-logo.svg";
import logoWhite from "../../assets/brand/que-techo-logo-white.svg";

export default function Logo({ light = false }) {
  return (
    <Link className={`brand ${light ? "brand-light" : ""}`} to="/" aria-label="Que Techo home">
      <img className="brand-logo" src={light ? logoWhite : logo} alt="Que Techo" />
    </Link>
  );
}
