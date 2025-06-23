import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  useScrollTrigger,
  Grow,
  CardMedia,
  Grid,
  Paper,
} from "@mui/material";
import {
  BookmarksOutlined,
  AccessTime,
  FavoriteBorder,
} from "@mui/icons-material";
// import { motion } from "framer-motion";
import { AnimatePresence, motion } from "framer-motion";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trigger = useScrollTrigger({ threshold: 100 });

  const contentItems = [
    {
      heading: "We are professional",
      description:
        "At Demorgia Consulting Services, professionalism is at the core of everything we do, ensuring excellence in our solutions and client satisfaction",
    },
    {
      heading: "Unlocking Potential, Empowering Growth",
      description:
        "Welcome to Demorgia Consulting Services, where we harness the power of skills assessment to unlock hidden talents and foster personal growth",
    },
    {
      heading: "Your Trusted Partner in Skills Assessment",
      description:
        "Demorgia Consulting Services, an esteemed assessment agency, dedicated to evaluating and certifying skills across diverse industries",
    },
  ];

  const featuredServices = [
    {
      icon: <BookmarksOutlined sx={{ fontSize: 40 }} />,
      title: "Continuous enhancement",
      description:
        "We continuously enhance our assessment methodologies and technologies to ensure precise evaluation and reliable results.",
    },
    {
      icon: <AccessTime sx={{ fontSize: 40 }} />,
      title: "Strategic partnership",
      description:
        "Foster strategic partnerships with stakeholders to facilitate seamless transitions from assessment to employability.",
    },
    {
      icon: <FavoriteBorder sx={{ fontSize: 40 }} />,
      title: "Contribution",
      description:
        "We contribute to the national agenda of skill development by supporting the goals and initiatives of the MSDE.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % contentItems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Box sx={{ py: 12, position: "relative", background: "#fff", mt: 5 }}>
        <Container maxWidth="lg" sx={{ position: "relative" }}>
          {/* Left Floating Cards */}
          <Box
            sx={{
              position: "absolute",
              left: { xs: "0%", md: "-6%" },
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 2,
              display: { xs: "none", md: "block" },
            }}
          >
            <Grow in={true} timeout={1000}>
              <Box>
                <Box
                  sx={{
                    mb: 2,
                    transform: "rotate(-3deg)",
                    boxShadow: 3,
                    borderRadius: 2,
                    overflow: "hidden",
                  }}
                >
                  <CardMedia
                    component="img"
                    image="/intro-carousel/1.jpg"
                    alt="Left Template 1"
                    sx={{ width: 160, height: 110 }}
                  />
                </Box>
                <Box
                  sx={{
                    transform: "rotate(2deg)",
                    boxShadow: 3,
                    borderRadius: 2,
                    overflow: "hidden",
                  }}
                >
                  <CardMedia
                    component="img"
                    image="/intro-carousel/2.jpg"
                    alt="Left Template 2"
                    sx={{ width: 160, height: 110 }}
                  />
                </Box>
              </Box>
            </Grow>
          </Box>

          {/* Right Floating Cards */}
          <Box
            sx={{
              position: "absolute",
              right: { xs: "0%", md: "-6%" },
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 2,
              display: { xs: "none", md: "block" },
            }}
          >
            <Grow in={true} timeout={1000}>
              <Box>
                <Box
                  sx={{
                    mb: 2,
                    transform: "rotate(2deg)",
                    boxShadow: 3,
                    borderRadius: 2,
                    overflow: "hidden",
                  }}
                >
                  <CardMedia
                    component="img"
                    image="/intro-carousel/3.jpg"
                    alt="Right Template 1"
                    sx={{ width: 160, height: 110 }}
                  />
                </Box>
                <Box
                  sx={{
                    transform: "rotate(-2deg)",
                    boxShadow: 3,
                    borderRadius: 2,
                    overflow: "hidden",
                  }}
                >
                  <CardMedia
                    component="img"
                    image="/intro-carousel/4.jpg"
                    alt="Right Template 2"
                    sx={{ width: 160, height: 110 }}
                  />
                </Box>
              </Box>
            </Grow>
          </Box>
              <Box textAlign="center" zIndex={1} position="relative" sx={{
    maxWidth: { xs: "100%", md: "80%" }, // Restrict content width
    mx: "auto", // Center it
    px: { xs: 2, sm: 4 }, // Add padding for smaller screens
}}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                     transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: "bold",
                        mb: 2,
                        fontSize: { xs: "2rem", md: "3rem" },
                      }}
                    >
                      {contentItems[currentIndex].heading}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ mb: 4, maxWidth: 600, mx: "auto" }}
                    >
                      {contentItems[currentIndex].description}
                    </Typography>
                  </motion.div>
                </AnimatePresence>

                {/* Button stays fixed below */}
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#00c853",
                    px: 4,
                    py: 1.5,
                    fontSize: "1rem",
                    textTransform: "none",
                    borderRadius: "999px",
                    animation:
                      "glow 3s ease-in-out infinite, shake 0.5s ease-in-out infinite",
                    animationDelay: "0s, 3s",
                    "&:hover": {
                      backgroundColor: "#00b248",
                      animation: "shake 0.3s ease-in-out",
                    },
                  }}
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Get Started
                </Button>
              </Box>
        </Container>
      </Box>

      {/* Featured Services Section */}
      <Box
        id="featured-services"
        sx={{
          py: 12,
          position: "relative",
          background: "white",
          overflow: "hidden",
          zIndex: 1,
        }}
      >
        {/* Background floating shapes */}
        <Box
          sx={{
            position: "absolute",
            top: "-50px",
            left: "-100px",
            width: 200,
            height: 200,
            background: "white",
            borderRadius: "50%",
            filter: "blur(80px)",
            zIndex: 0,
            animation: "float1 12s ease-in-out infinite",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: "-60px",
            right: "-120px",
            width: 220,
            height: 220,
            background: "white",
            borderRadius: "50%",
            filter: "blur(80px)",
            zIndex: 0,
            animation: "float2 10s ease-in-out infinite",
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              gap: 4,
            }}
          >
            {[
              {
                icon: (
                  <BookmarksOutlined sx={{ fontSize: 48, color: "#3f51b5" }} />
                ),
                title: "Continuous enhancement",
                description:
                  "We continuously enhance our assessment methodologies and technologies to ensure precise evaluation and reliable results.",
              },
              {
                icon: <AccessTime sx={{ fontSize: 48, color: "#f06292" }} />,
                title: "Strategic partnership",
                description:
                  "Foster strategic partnerships with stakeholders to facilitate seamless transitions from assessment to employability.",
              },
              {
                icon: (
                  <FavoriteBorder sx={{ fontSize: 48, color: "#00c853" }} />
                ),
                title: "Contribution",
                description:
                  "We contribute to the national agenda of skill development by supporting the goals and initiatives of the MSDE.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                style={{ flex: 1 }}
              >
                <Box
                  sx={{
                    p: 4,
                    textAlign: "center",
                    borderRadius: 4,
                    backgroundColor: "#fff",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
                    transition: "all 0.3s ease",
                    height: "100%",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: "0 12px 32px rgba(0,0,0,0.12)",
                    },
                  }}
                >
                  <Box mb={2}>{item.icon}</Box>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      fontWeight: "bold",
                      position: "relative",
                      display: "inline-block",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        left: 0,
                        bottom: -4,
                        width: "100%",
                        height: "3px",
                        background:
                          "linear-gradient(90deg, #3f51b5, #f06292, #00c853)",
                        transform: "scaleX(0)",
                        transformOrigin: "left",
                        transition: "transform 0.3s ease",
                      },
                      "&:hover::after": {
                        transform: "scaleX(1)",
                      },
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 1.5, lineHeight: 1.6 }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </Box>
        </Container>

        {/* Float animations */}
        <style>
          {`
      @keyframes float1 {
        0% { transform: translateY(0px); }
        50% { transform: translateY(30px); }
        100% { transform: translateY(0px); }
      }

      @keyframes float2 {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-30px); }
        100% { transform: translateY(0px); }
      }

      @keyframes shake {
  0% { transform: translateX(0); }
  25% { transform: translateX(-3px); }
  50% { transform: translateX(3px); }
  75% { transform: translateX(-3px); }
  100% { transform: translateX(0); }
}

    @keyframes glow {
      0% { box-shadow: 0 0 8px rgba(0, 200, 83, 0.3); }
      50% { box-shadow: 0 0 20px rgba(0, 200, 83, 0.7); }
      100% { box-shadow: 0 0 8px rgba(0, 200, 83, 0.3); }
    }

    @keyframes bounceText {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-2px); }
    }
    `}
        </style>
      </Box>
    </>
  );
};

export default Home;

// import React, { useEffect, useRef, useState } from "react";
// import { Box, Button, Typography } from "@mui/material";
// import { motion } from "framer-motion";

// const Home = () => {
//   const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
//   const [gradientAngle, setGradientAngle] = useState(45);
//   const rippleRef = useRef(null);

//   useEffect(() => {
//     document.body.style.overflowX = "hidden";
//     return () => {
//       document.body.style.overflowX = "";
//     };
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setGradientAngle((prev) => (prev + 1) % 360);
//     }, 100);
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     const updateCursor = (e) => {
//       const x = e.clientX;
//       const y = e.clientY;
//       setCursorPosition({ x, y });

//       if (rippleRef.current) {
//         rippleRef.current.style.left = `${x - 10}px`;
//         rippleRef.current.style.top = `${y - 10}px`;
//       }
//     };

//     window.addEventListener("mousemove", updateCursor);
//     return () => window.removeEventListener("mousemove", updateCursor);
//   }, []);

//   return (
//     <Box
//       sx={{
//         width: "100vw",
//         height: "100vh",
//         background: `linear-gradient(${gradientAngle}deg, rgba(248, 243, 245, 0.8), #ffffff 40%)`,
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         overflow: "hidden",
//         position: "relative",
//         margin: 0,
//         padding: 0,
//         boxSizing: "border-box",
//       }}
//     >
//       {/* Cursor ripple animation */}
//       <motion.div
//         ref={rippleRef}
//         className="cursor-ripple"
//         animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.6, 0.4] }}
//         transition={{ duration: 1.5, repeat: Infinity }}
//         style={{
//           position: "fixed",
//           width: 20,
//           height: 20,
//           borderRadius: "50%",
//           backgroundColor: "#f48fb1",
//           pointerEvents: "none",
//           zIndex: 10,
//         }}
//       />

//       {/* Subtle animated radial background */}
//       <motion.div
//         initial={{ opacity: 0.1, scale: 1 }}
//         animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.05, 1] }}
//         transition={{
//           duration: 12,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         style={{
//           position: "absolute",
//           width: "1000px",
//           height: "1000px",
//           borderRadius: "50%",
//           background: "radial-gradient(circle, rgba(63,81,181,0.05), transparent 70%)",
//           top: "50%",
//           left: "50%",
//           transform: "translate(-50%, -50%)",
//           zIndex: 0,
//           pointerEvents: "none",
//         }}
//       />

//       {/* Main content */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.2 }}
//         style={{
//           zIndex: 2,
//           textAlign: "center",
//           maxWidth: "800px",
//           padding: "1rem",
//         }}
//       >
//         <Typography
//           variant="h2"
//           sx={{
//             background: "linear-gradient(90deg, #3f51b5, #d81b60)",
//             backgroundClip: "text",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",
//             fontWeight: "bold",
//             mb: 2,
//             fontSize: { xs: "1.8rem", sm: "2.4rem", md: "3rem" },
//           }}
//         >
//           Empowering Skills. Enabling Growth.
//         </Typography>
//         <Typography
//           variant="h6"
//           sx={{
//             color: "#333",
//             mb: 4,
//             fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
//           }}
//         >
//           Welcome to Demorgia Consulting Services – where we help discover talent and enable excellence through professional assessments.
//         </Typography>
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1, duration: 1 }}
//         >
//           <Button
//             variant="contained"
//             size="large"
//             sx={{
//               background: "linear-gradient(135deg, #3f51b5, #7e57c2)",
//               color: "#fff",
//               borderRadius: "50px",
//               px: { xs: 4, sm: 5 },
//               py: { xs: 1.2, sm: 1.5 },
//               fontSize: { xs: "0.9rem", sm: "1rem" },
//               fontWeight: "bold",
//               boxShadow: "0 8px 30px rgba(63, 81, 181, 0.2)",
//               textTransform: "none",
//               transition: "all 0.4s ease",
//               "&:hover": {
//                 background: "linear-gradient(135deg, #303f9f, #5e35b1)",
//                 boxShadow: "0 10px 40px rgba(63, 81, 181, 0.4)",
//                 transform: "scale(1.05)",
//               },
//             }}
// onClick={() =>
//   document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
// }
//           >
//             Get Started
//           </Button>
//         </motion.div>
//       </motion.div>
//     </Box>
//   );
// };

// export default Home;
