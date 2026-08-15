import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CapabilityPage from "./pages/CapabilityPage";
import Contact from "./pages/Contact";
import IndustryPage from "./pages/IndustryPage";
import SourcePage from "./pages/SourcePage";
import ServicesIndex from "./pages/ServicesIndex";
import ResourcesIndex from "./pages/ResourcesIndex";
import ScrollToTop from "./components/layout/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/capabilities/:slug" element={<CapabilityPage />} />
        <Route path="/industries/:slug" element={<IndustryPage />} />
        <Route path="/services" element={<ServicesIndex />} />
        <Route path="/services/data-engineering" element={<CapabilityPage forcedSlug="engineering" />} />
        <Route path="/services/:slug" element={<SourcePage />} />
        <Route path="/company/:slug" element={<SourcePage />} />
        <Route path="/resources" element={<ResourcesIndex />} />
        <Route path="/resources/:slug" element={<SourcePage />} />
        <Route path="/careers" element={<SourcePage fixedSlug="job-openings" />} />
        <Route path="/learning" element={<SourcePage fixedSlug="program-and-learning" />} />
        <Route path="/technologies" element={<SourcePage fixedSlug="our-technologies" />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
