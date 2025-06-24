import React from "react";
import { Box, Typography, Container, Tooltip } from "@mui/material";
import Marquee from "react-fast-marquee";
import { keyframes } from "@emotion/react";
// import Testimonials from "./Testimonials";

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const partners = [
  { name: "Beauty", img: "beauty.jpg" },
  { name: "CSDCI", img: "csdci.jpg" },
  { name: "Domestic", img: "domestic.jpg" },
  { name: "Electronics", img: "Electronics.jpg" },
  { name: "Food", img: "food.jpg" },
  { name: "Furniture", img: "furniture.jpg" },
  { name: "Gems", img: "gems.jpg" },
  { name: "Green", img: "green.jpg" },
  { name: "HCSC", img: "HCSC.jpg" },
  { name: "Health", img: "health.jpg" },
  { name: "IASC", img: "IASC.jpg" },
  { name: "Infra", img: "infra.jpg" },
  { name: "Iron", img: "iron.jpg" },
  { name: "Logistics", img: "logistics.jpg" },
  { name: "Media", img: "media.jpg" },
  { name: "Mining", img: "mining.jpg" },
  { name: "Retail", img: "retail.jpg" },
  { name: "Telecom", img: "telecom.jpg" },
  { name: "CIPET", img: "cipet.jpg" },
  { name: "CREDAI", img: "credai.jpg" },
  { name: "DGT", img: "dgt.webp" },
  { name: "MoMA", img: "moma.jpg" },
  { name: "MSME", img: "msme.jpg" },
  { name: "NSKFDC", img: "nskfdc.jpeg" },
  { name: "UPSDM", img: "upsdm.jpg" },
  { name: "Volkswagen", img: "vokswagen.jpg" },
  { name: "WWG", img: "wwg.jpeg" },
  { name: "RACL", img: "racl.jpeg" },
  { name: "Flipkart", img: "flipkart.jpeg" },
  { name: "Edge", img: "edge.png" },
  { name: "Bhabha", img: "bhabha.jpg" },
  { name: "BNCET", img: "bncet.jpeg" },
  { name: "GEC", img: "gec.png" },
  { name: "GIET", img: "giet.jpg" },
  { name: "Sambhu", img: "sambhu.png" },
  { name: "SVN", img: "svn.png" },
];

const Partners = () => {
  return (
    <>
      <Box
        id="clients"
        sx={{
          py: { xs: 6, md: 10 },
          // background: "linear-gradient(-45deg, #f8f9fa, #e0f7fa, #f8f9fa)",
          background: "white",
          backgroundSize: "400% 400%",
          animation: `${gradientAnimation} 20s ease infinite`,
        }}
      >
        <Container>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{
              fontWeight: 700,
              mb: 6,
              color: "#1e293b",
              textTransform: "uppercase",
              letterSpacing: 1,
            }}
          >
            Our <span style={{ color: "#1976d2" }}>Partners</span>
          </Typography>

          <Marquee speed={40} gradient={false} pauseOnHover>
            {partners.map((partner, index) => (
              <Tooltip title={partner.name} key={index}>
                <Box
                  component="img"
                  src={`/clients/${partner.img}`}
                  alt={partner.name}
                  loading="lazy"
                  sx={{
                    height: { xs: 60, sm: 80 },
                    width: "auto",
                    mx: 4,
                    filter: "grayscale(100%)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      filter: "grayscale(0%)",
                      transform: "scale(1.1)",
                    },
                  }}
                />
              </Tooltip>
            ))}
          </Marquee>
        </Container>
      </Box>
      {/* <Testimonials /> */}
    </>
  );
};

export default Partners;
