import React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarBorderIcon from "@mui/icons-material/StarBorder";

// Testimonials data
const testimonials = [
  {
    name: "Ajay Bhusan",
    role: "CEO, Instrumentation Automation Surveillance & Communication Sector Skill Council",
    text: "It has been a wonderful experience we have had with Demorgia. Their entire team consists of highly skilled and motivated professionals, who have in depth knowledge of their subjects. They work with dedication and it’s a pleasure working with their team members. Till now, Demorgia has conducted quality assessments and also support us in placement’s Wish you all the best to Team Demorgia.",
    img: "ajay-bhusan.jpg",
    rating: 5,
  },
  {
    name: "Col. Anand Kumar Singh (Retd.)",
    role: "Chief Executive Officer Construction Skill Development Council of India",
    text: "We extend our deepest gratitude to you for the exceptional support provided during the successful execution of the Mega Rozgar Mela at CSTI Cuttack. Your professionalism, expertise, and meticulous attention to detail were truly commendable throughout the entire process. We also greatly value your significant contributions to CSDCI, not only as an employer but also through your invaluable guidance, advertising efforts, and expert insights. Working alongside you has been an absolute pleasure, and your partnership played an integral part in making the event an unforgettable experience for all involved.",
    img: "col.jpg",
    rating: 4.5,
  },
  {
    name: "Prof. Jawed A Shaikh",
    role: "Director Placement, Meghe Group of Institutions (MGI)",
    text: "Demorgia Consulting Services and their exceptional team have been instrumental in providing a valuable platform that bridges the gap between colleges and core companies, young students unprecedented opportunities. We are truly delighted with the exemplary services they provide. Their dedication to facilitating connections and opening doors for aspiring individuals is commendable. We wholeheartedly encourage them to continue their outstanding work, making a lasting impact in the industry.",
    img: "jawed.jpg",
    rating: 4,
  },
  {
    name: "Shivendra Singh",
    role: "Training and Placement Head, Bhabha Group of Institutions",
    text: "We are immensely satisfied and pleased to have Demorgia Consulting Services Pvt Ltd as our esteemed corporate partner. Throughout our collaboration, Demorgia has demonstrated a profound understanding of our vision and operational workflows, seamlessly complementing our placements without any disruptions or challenges on our end. Their ability to align with our objectives and provide seamless support has been truly exceptional. We extend our heartfelt appreciation for their commitment to excellence and look forward to a continued partnership that brings mutual success and growth.",
    img: "shiv.jpg",
    rating: 5,
  },
  {
    name: "Divyasen Singh",
    role: "Sr Manager - Corporate Relation Cell, SGI - SIET, Allahabad, UP",
    text: "Demorgia is committed to attracting and employing passionate, skilled and capable individuals who will thrive in their culture, through standardized and transparent competency based people processes. Demorgia competency model forms the foundation for integrating all people processes around recruitment, performance management, development, career transition and retention.Thier strategic Talent Management approach helps in aligning employees’ goals to those of each business, identifying and developing their potential, and optimizing their performance, thereby leading to accelerated organizational growth and productivity.",
    img: "divyasen.jpg",
    rating: 4.7,
  },
];

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (half ? 1 : 0);

  return (
    <>
      {Array.from({ length: fullStars }).map((_, i) => (
        <StarIcon key={`full-${i}`} sx={{ color: "#FFC107", fontSize: 20 }} />
      ))}
      {half && <StarHalfIcon sx={{ color: "#FFC107", fontSize: 20 }} />}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <StarBorderIcon
          key={`empty-${i}`}
          sx={{ color: "#FFC107", fontSize: 20 }}
        />
      ))}
    </>
  );
};

const Testimonials = () => {
  return (
    <Box
      id="testimonials"
      sx={{
        py: 10,
        px: 2,
        background: "linear-gradient(120deg, #e0f7fa, #f3f4f6)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      {/* Typing Heading */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          color: "#1976d2",
          mb: 6,
          borderRight: "4px solid #1976d2",
          whiteSpace: "nowrap",
          overflow: "hidden",
          animation: "typing 3s steps(40, end) forwards",
          maxWidth: "100%",
          textAlign: "center",
        }}
      >
        Testimonials
      </Typography>

      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        slidesPerView={1}
        loop
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        style={{ width: "100%", maxWidth: 720 }}
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                mx: "auto",
                px: 4,
                py: 5,
                borderRadius: "16px",
                maxWidth: 700,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                position: "relative",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.02)",
                },
              }}
            >
              {/* Top-right Quote Icon */}
              <FormatQuoteIcon
                sx={{
                  fontSize: 40,
                  color: "#1976d2",
                  position: "absolute",
                  top: 10,
                  right: 10,
                  opacity: 0.3,
                }}
              />

              {/* Avatar */}
              <Avatar
                src={`/${t.img}`}
                alt={t.name}
                sx={{ width: 80, height: 80, mb: 2 }}
              />

              {/* Text */}
              <Typography
                variant="body1"
                sx={{
                  fontStyle: "italic",
                  mb: 2,
                  color: "#333",
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                  px: { xs: 1, sm: 3 },
                }}
              >
                {t.text}
              </Typography>

              {/* Star Ratings */}
              <Box
                sx={{ display: "flex", justifyContent: "center", mt: 1, mb: 1 }}
              >
                {renderStars(t.rating)}
              </Box>

              {/* Name */}
              <Typography variant="h6" fontWeight={600}>
                {t.name}
              </Typography>

              {/* Role */}
              <Typography variant="body2" color="text.secondary">
                {t.role}
              </Typography>

              {/* Bottom-left Quote Icon */}
              <FormatQuoteIcon
                sx={{
                  fontSize: 40,
                  color: "#1976d2",
                  position: "absolute",
                  bottom: 10,
                  left: 10,
                  transform: "rotate(180deg)",
                  opacity: 0.3,
                }}
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Typing Animation */}
      <style>
        {`
          @keyframes typing {
            from { width: 0 }
            to { width: 100% }
          }
        `}
      </style>
    </Box>
  );
};

export default Testimonials;
