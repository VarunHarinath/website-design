import { technologyGroups } from "../../data/services";

export default function TechnologyStrip() {
  return <section className="technology-strip"><p>Our Technologies: A Powerful Toolkit for Your Success</p><div>{technologyGroups.map((item) => <span key={item}>{item}</span>)}</div></section>;
}
