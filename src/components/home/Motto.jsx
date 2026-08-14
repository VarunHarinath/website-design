import { company } from "../../data/company";

export default function Motto() {
  return <section className="motto-section" aria-label="Our motto"><p>Our Motto</p>{company.motto.map((word, i) => <h2 key={word} className={i === 1 ? "accent" : ""}>{word}</h2>)}</section>;
}
