import React, { useRef } from "react";
import Home from "./components/Home";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Partners from "./components/Partners";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import About from "./components/About";
import Facts from "./components/Facts";
import { Box } from "@mui/material";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);
  const partnersRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

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

      <Box sx={{ minHeight: "100vh", overflowX: "hidden" }}>
        <section ref={homeRef}><Home /></section>
        <section ref={aboutRef}><About /></section>
        <section ref={servicesRef}><Services /></section>
        <section><Facts /></section>
        <section ref={portfolioRef}><Portfolio /></section>
        <section ref={partnersRef}><Partners /></section>
        <section ref={contactRef}><Contact /></section>
      </Box>

      <Footer />
    </>
  );
}

export default App;
