// // src/components/PartnerCarousel.jsx
// import React from "react";
// import Slider from "react-slick";
// import { Box, Typography, Container } from "@mui/material";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const partnerLogos = [
//   "beauty.jpg", "csdci.jpg", "domestic.jpg", "Electronics.jpg", "food.jpg",
//   "furniture.jpg", "gems.jpg", "green.jpg", "HCSC.jpg", "health.jpg",
//   "IASC.jpg", "infra.jpg", "iron.jpg", "logistics.jpg", "media.jpg",
//   "mining.jpg", "retail.jpg", "telecom.jpg", "cipet.jpg", "credai.jpg",
//   "dgt.webp", "moma.jpg", "msme.jpg", "nskfdc.jpeg", "upsdm.jpg",
//   "vokswagen.jpg", "wwg.jpeg", "racl.jpeg", "flipkart.jpeg", "edge.png",
//   "bhabha.jpg", "bncet.jpeg", "gec.png", "giet.jpg", "sambhu.png", "svn.png",
// ];

// const Partners = () => {
//   const settings = {
//     dots: false,
//     infinite: true,
//     autoplay: true,
//     autoplaySpeed: 1500,
//     slidesToShow: 6,
//     slidesToScroll: 1,
//     pauseOnHover: true,
//     responsive: [
//       { breakpoint: 1200, settings: { slidesToShow: 5 } },
//       { breakpoint: 992, settings: { slidesToShow: 4 } },
//       { breakpoint: 768, settings: { slidesToShow: 3 } },
//       { breakpoint: 480, settings: { slidesToShow: 2 } },
//     ],
//   };

//   return (
//     <Box id="clients" sx={{ py: 8, bgcolor: "#f9f9f9" }}>
//       <Container>
//         <Typography
//           variant="h4"
//           align="center"
//           gutterBottom
//           sx={{ fontWeight: "bold", color: "#333", mb: 5 }}
//         >
//           Our <span style={{ color: "#1976d2" }}>Partners</span>
//         </Typography>

//         <Slider {...settings}>
//           {partnerLogos.map((logo, index) => (
//             <Box
//               key={index}
//               sx={{
//                 px: 1,
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 transition: "transform 0.3s",
//                 "&:hover": {
//                   transform: "scale(1.05)",
//                 },
//               }}
//             >
//               <Box
//                 component="img"
//                 src={`/clients/${logo}`}
//                 alt="Partner Logo"
//                 sx={{
//                   maxHeight: 100,
//                   maxWidth: "100%",
//                   objectFit: "contain",
//                   filter: "grayscale(100%)",
//                   transition: "filter 0.3s",
//                   "&:hover": {
//                     filter: "grayscale(0%)",
//                   },
//                 }}
//               />
//             </Box>
//           ))}
//         </Slider>
//       </Container>
//     </Box>
//   );
// };

// export default Partners;

// import React from "react";
// import Slider from "react-slick";
// import { Box, Typography, Container, Fade, Zoom, Tooltip } from "@mui/material";
// import { keyframes } from "@emotion/react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// // Keyframes for background animation
// const gradientAnimation = keyframes`
//   0% { background-position: 0% 50%; }
//   50% { background-position: 100% 50%; }
//   100% { background-position: 0% 50%; }
// `;

// // Partner logos
// const partners = [
//   { name: "Beauty", img: "beauty.jpg" },
//   { name: "CSDCI", img: "csdci.jpg" },
//   { name: "Domestic", img: "domestic.jpg" },
//   { name: "Electronics", img: "Electronics.jpg" },
//   { name: "Food", img: "food.jpg" },
//   { name: "Furniture", img: "furniture.jpg" },
//   { name: "Gems", img: "gems.jpg" },
//   { name: "Green", img: "green.jpg" },
//   { name: "HCSC", img: "HCSC.jpg" },
//   { name: "Health", img: "health.jpg" },
//   { name: "IASC", img: "IASC.jpg" },
//   { name: "Infra", img: "infra.jpg" },
//   { name: "Iron", img: "iron.jpg" },
//   { name: "Logistics", img: "logistics.jpg" },
//   { name: "Media", img: "media.jpg" },
//   { name: "Mining", img: "mining.jpg" },
//   { name: "Retail", img: "retail.jpg" },
//   { name: "Telecom", img: "telecom.jpg" },
//   { name: "CIPET", img: "cipet.jpg" },
//   { name: "CREDAI", img: "credai.jpg" },
//   { name: "DGT", img: "dgt.webp" },
//   { name: "MoMA", img: "moma.jpg" },
//   { name: "MSME", img: "msme.jpg" },
//   { name: "NSKFDC", img: "nskfdc.jpeg" },
//   { name: "UPSDM", img: "upsdm.jpg" },
//   { name: "Volkswagen", img: "vokswagen.jpg" },
//   { name: "WWG", img: "wwg.jpeg" },
//   { name: "RACL", img: "racl.jpeg" },
//   { name: "Flipkart", img: "flipkart.jpeg" },
//   { name: "Edge", img: "edge.png" },
//   { name: "Bhabha", img: "bhabha.jpg" },
//   { name: "BNCET", img: "bncet.jpeg" },
//   { name: "GEC", img: "gec.png" },
//   { name: "GIET", img: "giet.jpg" },
//   { name: "Sambhu", img: "sambhu.png" },
//   { name: "SVN", img: "svn.png" },
// ];

// const settings = {
//   dots: false,
//   infinite: true,
//   autoplay: true,
//   autoplaySpeed: 2200,
//   slidesToShow: 5,
//   slidesToScroll: 1,
//   pauseOnHover: true,
//   responsive: [
//     { breakpoint: 1200, settings: { slidesToShow: 4 } },
//     { breakpoint: 900, settings: { slidesToShow: 3 } },
//     { breakpoint: 600, settings: { slidesToShow: 2 } },
//   ],
// };

// const Partners = () => {
//   return (
//     <Box
//       id="clients"
//       sx={{
//         py: { xs: 6, md: 10 },
//         background: "linear-gradient(-45deg, #f1f8e9, #e0f7fa, #fffde7, #e0f2f1)",
//         backgroundSize: "400% 400%",
//         animation: `${gradientAnimation} 20s ease infinite`,
//       }}
//     >
//       <Container>
//         <Fade in timeout={1000}>
//           <Typography
//             variant="h4"
//             align="center"
//             gutterBottom
//             sx={{
//               fontWeight: 700,
//               mb: 6,
//               color: "#333",
//               textTransform: "uppercase",
//               letterSpacing: 1,
//             }}
//           >
//             Our <span style={{ color: "#1976d2" }}>Partners</span>
//           </Typography>
//         </Fade>

//         <Zoom in timeout={1600}>
//           <Box>
//             <Slider {...settings}>
//               {partners.map((partner, index) => (
//                 <Box
//                   key={index}
//                   sx={{
//                     px: 1,
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     transition: "transform 0.3s",
//                     "&:hover": {
//                       transform: "scale(1.08)",
//                     },
//                   }}
//                 >
//                   <Tooltip title={partner.name} arrow>
//                     <Box
//                       component="img"
//                       src={`/clients/${partner.img}`}
//                       alt={partner.name}
//                       loading="lazy"
//                       sx={{
//                         height: { xs: 60, sm: 80 },
//                         width: "auto",
//                         objectFit: "contain",
//                         filter: "grayscale(100%)",
//                         mb: 1,
//                         transition: "filter 0.4s, box-shadow 0.4s",
//                         borderRadius: 2,
//                         boxShadow: 1,
//                         "&:hover": {
//                           filter: "grayscale(0%)",
//                           boxShadow: 3,
//                         },
//                       }}
//                     />
//                   </Tooltip>
//                   <Typography variant="body2" color="text.secondary" fontWeight={500}>
//                     {partner.name}
//                   </Typography>
//                 </Box>
//               ))}
//             </Slider>
//           </Box>
//         </Zoom>
//       </Container>
//     </Box>
//   );
// };

// export default Partners;


import React from "react";
import { Box, Typography, Container, Tooltip } from "@mui/material";
import Marquee from "react-fast-marquee";
import { keyframes } from "@emotion/react";
import Testimonials from "./Testimonials";

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

