import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ServiceHero from "./pages/Service";
import Company from "./pages/Company";
import { PrivacyPolicy } from "./components/PrivacyPolicy";
import Contact from "./pages/Contact";
import BlogInner from "./pages/BlogInner";
import ContactModal from "./layout/ContactModal";
import Career from "./pages/Career";
import CareerInner from "./pages/CareerInner";
import Blog from "./pages/Blog";
import TeamMemberPage from "./pages/TeamMember";
import ScrollToTop from "./components/ScrollTop";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col">
    <ScrollToTop/>
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service" element={<ServiceHero />} />
            <Route path="/company" element={<Company />} />
            <Route path="/career" element={<Career />} />
            <Route path="/career/:slug" element={<CareerInner />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogInner />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog/:id" element={<BlogInner />} />
            <Route path="/career/:slug" element={<CareerInner />} />
            <Route
              path="/team-member"
              element={<TeamMemberPage />}
            />

            <Route
              path="/privacy-policy"
              element={<PrivacyPolicy />}
            />
          </Routes>
        </main>
        <Footer />
        <ContactModal />
      </div>
    </BrowserRouter>
  );
}
