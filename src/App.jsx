import React, { useRef } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Partners from "./components/Partners";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import About from "./components/About";
import Facts from "./components/Facts";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermOfServices"; // create this page if not already
import { Box } from "@mui/material";
import SafeWorkplacePolicy from "./pages/SafeWorkplacePolicy";

function App() {
  const location = useLocation();

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);
  const partnersRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Define standalone routes where only header/footer + page should be shown
  const standaloneRoutes = ["/privacy-policy", "/terms-of-service", "/safe-workplace-policy"];
  const isStandalone = standaloneRoutes.includes(location.pathname);

  return (
    <>
      <Header
        onNavigate={{
          home: () => scrollToSection(homeRef),
          about: () => scrollToSection(aboutRef),
          services: () => scrollToSection(servicesRef),
          portfolio: () => scrollToSection(portfolioRef),
          partners: () => scrollToSection(partnersRef),
          contact: () => scrollToSection(contactRef),
        }}
      />

      {!isStandalone && (
        <Box sx={{ minHeight: "100vh", overflowX: "hidden" }}>
          <section ref={homeRef}><Home /></section>
          <section ref={aboutRef}><About /></section>
          <section ref={servicesRef}><Services /></section>
          <section><Facts /></section>
          <section ref={portfolioRef}><Portfolio /></section>
          <section ref={partnersRef}><Partners /></section>
          <section ref={contactRef}><Contact /></section>
        </Box>
      )}

      {/* Standalone Pages Routes */}
      <Routes>
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/safe-workplace-policy" element={<SafeWorkplacePolicy />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
