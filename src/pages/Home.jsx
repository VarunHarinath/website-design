import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/home/Hero";
import AISection from "../components/home/AISection";
import Engineers from "../components/home/Engineers";
import CoreServices from "../components/home/CoreServices";
import CapabilitiesGrid from "../components/home/CapabilitiesGrid";
import Motto from "../components/home/Motto";
import Impact from "../components/home/Impact";
import Industries from "../components/home/Industries";
import WhyInicio from "../components/home/WhyInicio";
import TechnologyStrip from "../components/home/TechnologyStrip";
import Insights from "../components/home/Insights";
import ContactCTA from "../components/home/ContactCTA";

export default function Home() {
  return <><Header /><main><Hero /><AISection /><Engineers /><CoreServices /><CapabilitiesGrid /><Motto /><Impact /><Industries /><WhyInicio /><TechnologyStrip /><Insights /><ContactCTA /></main><Footer /></>;
}
