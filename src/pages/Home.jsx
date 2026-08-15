import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/home/Hero";
import AISection from "../components/home/AISection";
import ServicesOverview from "../components/home/ServicesOverview";
import CapabilitiesGrid from "../components/home/CapabilitiesGrid";
import Motto from "../components/home/Motto";
import Industries from "../components/home/Industries";
import WhyQueTecho from "../components/home/WhyQueTecho";
import Insights from "../components/home/Insights";
import ContactCTA from "../components/home/ContactCTA";

export default function Home() {
  return <><Header /><main><Hero /><AISection /><ServicesOverview /><CapabilitiesGrid /><Motto /><Industries /><WhyQueTecho /><Insights /><ContactCTA /></main><Footer /></>;
}
