import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CapabilityPage from "./pages/CapabilityPage";
import Contact from "./pages/Contact";
import IndustryPage from "./pages/IndustryPage";
import ScrollToTop from "./components/layout/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/capabilities/:slug" element={<CapabilityPage />} />
        <Route path="/industries/:slug" element={<IndustryPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
