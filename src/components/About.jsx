import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Container,
  Typography,
  IconButton,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import SpeedIcon from "@mui/icons-material/Speed";
import ListAltIcon from "@mui/icons-material/ListAlt";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import OurStory from "./OurStory";

const About = () => {
  const theme = useTheme();
  const [flippedIndex, setFlippedIndex] = useState(-1);
  const [hovering, setHovering] = useState(false);
  const containerRef = useRef(null);
  const touchStartX = useRef(null);

  const aboutDetails = [
    {
      title: "Our Mission",
      icon: <SpeedIcon sx={{ fontSize: 32, color: "#fff" }} />,
      image: "/about-mission.jpg",
      description:
        "Empower individuals and industries through accurate assessments using advanced IT, fostering skill development, and building a skilled workforce. We utilize AI, cloud infrastructure, secure data management, and analytics to ensure efficient and reliable evaluations.",
    },
    {
      title: "Our Vision",
      icon: <VisibilityIcon sx={{ fontSize: 32, color: "#fff" }} />,
      image: "/about-vision.jpg",
      description:
        "Become a leading assessment agency recognized for excellence and innovation. Using adaptive testing, secure proctoring, and data analytics, we aim to revolutionize skill assessments, driving professional development and workforce readiness.",
    },
    {
      title: "Our Plan",
      icon: <ListAltIcon sx={{ fontSize: 32, color: "#fff" }} />,
      image: "/about-plan.jpg",
      description:
        "Collaborate with the Ministry of Skill Development to align with national goals. Leverage IT to enhance assessment accessibility, scalability, and security, featuring cloud solutions, multilingual interfaces, and integrated reporting for informed decision-making.",
    },
  ];

  useEffect(() => {
    if (hovering) return;
    const interval = setInterval(() => {
      setFlippedIndex((prev) => (prev + 1) % aboutDetails.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [aboutDetails.length, hovering]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = endX - touchStartX.current;
    if (diff > 50) {
      setFlippedIndex(
        (prev) => (prev - 1 + aboutDetails.length) % aboutDetails.length
      );
    } else if (diff < -50) {
      setFlippedIndex((prev) => (prev + 1) % aboutDetails.length);
    }
  };

  return (
    <Box
      id="about"
      sx={{
        py: 12,
        background: "white",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Box textAlign="center" mb={8}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{ fontSize: { xs: "2rem", md: "2.5rem" } }}
            >
              About{" "}
              <span style={{ color: theme.palette.primary.main }}>Us</span>
            </Typography>
          </motion.div>

          <Box mt={4} sx={{ maxWidth: 1000, mx: "auto" }}>
            {/* Intro */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h5"
                fontWeight="bold"
                color="primary"
                gutterBottom
              >
                Welcome to Demorgia Consulting Services Pvt. Ltd.
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                Examiners of Skilled Tomorrow — Since 2009, we specialize in
                delivering superior Assessment Solutions, IT Services, Training,
                Placement, and Manpower Consulting tailored to industry demands.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Recognized as the{" "}
                <strong>Best Performing Assessment Agency</strong> by the
                Construction Skill Development Council of India (CSDCI),
                upholding excellence and ethical assessment practices.
              </Typography>
            </motion.div>

            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: 4,
                mt: 4,
              }}
            >
              {/* Why Choose Us */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                style={{ flex: 1 }}
              >
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Why Choose Demorgia?
                </Typography>
                {[
                  "Trusted by NCVET – Authorized assessment agency across India.",
                  "Assessed over 1,00,000 candidates in 900+ job roles",
                  "200+ Subject Matter Experts and 1000+ certified assessors.",
                  "Presence across Noida, Jharkhand, Odisha, Karnataka, and Delhi.",
                ].map((item, idx) => (
                  <Box key={idx} display="flex" alignItems="center" mb={1}>
                    <CheckCircleIcon sx={{ color: "primary.main", mr: 1 }} />
                    <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                      {item}
                    </Typography>
                  </Box>
                ))}
              </motion.div>

              {/* Comprehensive Services */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                style={{ flex: 1 }}
              >
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Comprehensive Services
                </Typography>
                <Box component="ul" sx={{ pl: 2, listStyle: "none", m: 0 }}>
                  {[
                    "Skill Assessments – End-to-end lifecycle (Theory, Practical, Viva)",
                    "IT & Digital Solutions – LMS, exam platforms",
                    "Training & Placement – 150+ job fairs",
                    "Manpower Solutions – Industry-aligned hiring",
                  ].map((point, idx) => (
                    <li key={idx}>
                      <Box display="flex" alignItems="center" mb={1}>
                        <CheckCircleIcon
                          sx={{ color: "primary.main", mr: 1 }}
                          fontSize="small"
                        />
                        <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                          {point}
                        </Typography>
                      </Box>
                    </li>
                  ))}
                </Box>
              </motion.div>
            </Box>
          </Box>
        </Box>

        {/* Flipping Cards */}
        <Box
          ref={containerRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 4,
            flexDirection: { xs: "column", md: "row" },
            position: "relative",
          }}
        >
          {aboutDetails.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              style={{ flex: "1 1 calc(33.33% - 1.5rem)", minWidth: 280 }}
            >
              <Box
                onMouseEnter={() => setFlippedIndex(index)}
                sx={{
                  position: "relative",
                  perspective: "1000px",
                  height: 300,
                  borderRadius: 4,
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    transformStyle: "preserve-3d",
                    transition: "transform 1s",
                    transform:
                      flippedIndex === index
                        ? "rotateY(180deg)"
                        : "rotateY(0deg)",
                    borderRadius: 4,
                    boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      backfaceVisibility: "hidden",
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderRadius: 4,
                    }}
                  />

                  <Box
                    sx={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                      background:
                        "linear-gradient(-45deg, #b2ebf2, #80deea, #a5f1e9, #b2dfdb)",
                      backgroundSize: "400% 400%",
                      animation:
                        "gradientMove 10s ease infinite, flicker 1.6s ease-in-out infinite alternate",
                      color: "#004d40",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                      borderRadius: 4,
                      backdropFilter: "blur(12px)",
                      border: "1px solid rgba(255, 255, 255, 0.3)",
                      boxShadow: "inset 0 0 12px rgba(255,255,255,0.1)",
                      overflow: "hidden",
                    }}
                  >
                    <Box
                      mb={2}
                      mt={4}
                      sx={{
                        opacity: 0,
                        animation: "fadeInIcon 1s ease-out 1.2s forwards",
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      component="span"
                      sx={{
                        color: "#004d40",
                        fontSize: "1.2rem",
                        borderRight: "2px solid #004d40",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        display: "inline-block",
                        width: "0ch",
                        animation:
                          "typingLoop 3.6s steps(30, end) infinite, blink 0.75s step-end infinite",
                        p: 3,
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#004d40",
                        maxWidth: "90%",
                        opacity: 0,
                        animation: "fadeInText 2s ease-in-out 2.5s forwards",
                        p: 3,
                      }}
                    >
                      {item.description}
                    </Typography>
                    <style>{`
                      @keyframes gradientMove {
                        0% { background-position: 0% 50%; }
                        50% { background-position: 100% 50%; }
                        100% { background-position: 0% 50%; }
                      }
                      @keyframes flicker {
                        0% { opacity: 1; }
                        45% { opacity: 0.75; }
                        60% { opacity: 1; }
                        75% { opacity: 0.85; }
                        100% { opacity: 1; }
                      }
                      @keyframes typingLoop {
                        0% { width: 0ch; }
                        30% { width: 20ch; }
                        60% { width: 20ch; }
                        100% { width: 0ch; }
                      }
                      @keyframes blink {
                        0%, 100% { border-color: transparent; }
                        50% { border-color: #004d40; }
                      }
                      @keyframes fadeInText {
                        from { opacity: 0; transform: translateY(10px); }
                        to   { opacity: 1; transform: translateY(0); }
                      }
                      @keyframes fadeInIcon {
                        from { opacity: 0; transform: scale(0.8); }
                        to   { opacity: 1; transform: scale(1); }
                      }
                    `}</style>
                  </Box>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", mt: 2, gap: 1 }}>
          {aboutDetails.map((_, idx) => (
            <Box
              key={idx}
              sx={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor:
                  idx === flippedIndex ? theme.palette.primary.main : "#ccc",
                transition: "background-color 0.3s",
              }}
            />
          ))}
        </Box>
      </Container>
      <OurStory />
    </Box>
  );
};

export default About;
