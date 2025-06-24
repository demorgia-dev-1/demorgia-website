import React, { useEffect } from "react";
import { useLocation, Routes, Route, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import {
  NavigationProvider,
  useNavigation,
} from "./context/NavigationContext";
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
import TermsOfService from "./pages/TermOfServices";
import SafeWorkplacePolicy from "./pages/SafeWorkplacePolicy";
import Grievance from "./pages/Grievance";
import ScrollToTop from "./components/ScrollTop";

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();
  const { refs } = useNavigation();

  const scrollToSection = (refName) => {
    const sectionRef = refs[refName];
    if (sectionRef?.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: refName } });
    }
  };

  const isStandalone = [
    "/privacy-policy",
    "/terms-of-service",
    "/safe-workplace-policy",
    "/grievancce",
  ].includes(location.pathname);

  useEffect(() => {
    const scrollTo = location.state?.scrollTo;
    if (scrollTo && refs[scrollTo]?.current) {
      setTimeout(() => {
        refs[scrollTo].current.scrollIntoView({ behavior: "smooth" });
      }, 200);
    }
  }, [location, refs]);

  return (
    <>
      <Header
        onNavigate={{
          home: () => scrollToSection("homeRef"),
          about: () => scrollToSection("aboutRef"),
          services: () => scrollToSection("servicesRef"),
          portfolio: () => scrollToSection("portfolioRef"),
          partners: () => scrollToSection("partnersRef"),
          contact: () => scrollToSection("contactRef"),
        }}
      />

      {!isStandalone && (
        <Box sx={{ minHeight: "100vh", overflowX: "hidden" }}>
          <section ref={refs.homeRef}><Home /></section>
          <section ref={refs.aboutRef}><About /></section>
          <section ref={refs.servicesRef}><Services /></section>
          <section><Facts /></section>
          <section ref={refs.portfolioRef}><Portfolio /></section>
          <section ref={refs.partnersRef}><Partners /></section>
          <section ref={refs.contactRef}><Contact /></section>
        </Box>
      )}

      <Routes>
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/safe-workplace-policy" element={<SafeWorkplacePolicy />} />
        <Route path="/grievancce" element={<Grievance />} />
      </Routes>

      <Footer />
    </>
  );
}

export default function App() {
  return (
    <NavigationProvider>
      <ScrollToTop />
      <AppContent />
    </NavigationProvider>
  );
}
