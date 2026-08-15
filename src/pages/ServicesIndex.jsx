import { Link } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Arrow from "../components/Arrow";
import { serviceGroups } from "../data/sourceCatalog";

export default function ServicesIndex() {
  return <><Header /><main className="catalog-page"><section className="catalog-hero"><p>Services</p><h1>Empowering Your Digital Future with Cutting-Edge Solutions</h1><strong>Unlock the potential of technology and innovation to drive transformation and growth.</strong></section><section className="catalog-groups">{serviceGroups.map((group, index) => <article key={group.title}><div><span>0{index + 1}</span><Link to={`/services/${group.overviewSlug}`}><h2>{group.title}</h2><Arrow /></Link></div><ul>{group.items.map(([title, slug]) => <li key={title}><Link to={`/services/${slug}`}>{title}<Arrow /></Link></li>)}</ul></article>)}</section></main><Footer /></>;
}
