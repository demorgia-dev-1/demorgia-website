import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Chip,
  Tabs,
  Tab,
  Modal,
  IconButton,
  Dialog,
  DialogContent,
  Divider,
} from "@mui/material";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaRegCheckCircle,
  FaUserGraduate,
  FaLaptopCode,
  FaUserTie,
  FaChalkboardTeacher,
  FaProjectDiagram,
  FaTimes,
} from "react-icons/fa";

const services = [
  {
    title: "Skills Assessment",
    icon: <FaRegCheckCircle size={28} color="#004d40" />,
    description:
      "We offer comprehensive skills assessment services across various sectors, ensuring accurate evaluation and certification of individuals' competencies. Our assessments align with industry standards and are conducted by qualified assessors using advanced methodologies and online technological platform.",
    steps: [
      "Understand sector requirements",
      "Define assessment parameters",
      "Deploy qualified assessors",
      "Generate accurate certification reports",
    ],
    tools: ["Online Platform", "Secure Evaluation", "AI Scoring"],
    images: ["/services/assessment1.jpg", "/services/assessment2.jpg"],
    projects: [
      {
        name: "Assessment Portal",
        desc: "Web-based assessment solution for training centers.",
      },
      {
        name: "AI Evaluation System",
        desc: "Smart evaluation logic for remote assessments.",
      },
    ],
  },
  {
    title: "Skill Gap Analysis",
    icon: <FaUserGraduate size={28} color="#004d40" />,
    description:
      "Through our skill gap analysis services, we help businesses identify areas where their employees may require further training or development. By assessing the existing skill sets and analyzing the desired competencies, we provide insights to bridge the gap and foster continuous improvement within organizations.",
    steps: [
      "Evaluate current competencies",
      "Map to industry benchmarks",
      "Analyze and report gap insights",
      "Propose upskilling path",
    ],
    tools: ["Reports", "Data Analytics", "Visual Dashboards"],
    images: ["/services/gapanalysis.jpg"],
  },
  {
    title: "Software Solutions",
    icon: <FaLaptopCode size={28} color="#004d40" />,
    description:
      "we specialize in delivering cutting-edge software solutions that empower businesses to streamline their operations, enhance efficiency, and drive growth. Our tailored solutions cater to diverse industries, ensuring seamless integration and optimized performance to meet your unique needs.",
    steps: [
      "Requirement Analysis",
      "UI/UX & Prototyping",
      "Agile Development",
      "Testing & Deployment",
    ],
    tools: ["React", "Node.js", "MongoDB", "Firebase"],
    images: ["/services/software1.jpg", "/services/software2.jpg"],
    projects: [
      {
        name: "ERP System",
        desc: "Modular ERP for SMEs with inventory and HR modules.",
      },
      {
        name: "E-learning Portal",
        desc: "Interactive LMS with gamified assessments.",
      },
    ],
  },
  {
    title: "Manpower Solutions",
    icon: <FaUserTie size={32} color="#00c853" />,
    description:
      "Demorgia Consulting Services offers manpower solutions to assist businesses in sourcing, recruiting, and retaining skilled professionals. We understand the importance of a competent workforce and help organizations find the right talent to meet their specific requirements.",
    steps: [
      "Analyze staffing needs",
      "Source qualified candidates",
      "Conduct screening and onboarding",
      "Ensure placement and performance tracking",
    ],
    tools: ["Recruitment Platforms", "ATS", "HR Analytics"],
    images: ["/services/manpower1.jpg", "/services/manpower2.jpg"],
    projects: [
      {
        name: "Workforce Finder",
        desc: "Platform to connect employers with verified skilled workers.",
      },
      {
        name: "Hiring Suite",
        desc: "Applicant tracking and recruitment automation system.",
      },
    ],
  },
  {
    title: "Training and Development",
    icon: <FaChalkboardTeacher size={32} color="#00c853" />,
    description:
      "We offer training programs and workshops designed to enhance individuals' skills and knowledge in various domains. Our industry-specific training modules focus on improving practical abilities, soft skills, and professional development, empowering individuals to excel in their careers.",
    steps: [
      "Identify learning goals",
      "Design training modules",
      "Deliver workshops and sessions",
      "Evaluate progress and feedback",
    ],
    tools: ["LMS", "E-learning Tools", "Interactive Content"],
    images: ["/services/training1.jpg", "/services/training2.jpg"],
    projects: [
      {
        name: "SkillBoost",
        desc: "A platform offering curated training for industry professionals.",
      },
      {
        name: "Virtual Classroom",
        desc: "Live instructor-led training with assessment tools.",
      },
    ],
  },
  {
    title: "Business Solutions",
    icon: <FaProjectDiagram size={32} color="#00c853" />,
    description:
      "As technology enthusiasts, we are always exploring new tools and frameworks to stay at the cutting edge of innovation. We stays up-to-date with the latest trends in web and mobile development, ensuring that applications are built using the most advanced and efficient technologies available.",
    steps: [
      "Understand business pain points",
      "Propose tailored tech solutions",
      "Develop scalable systems",
      "Monitor performance and iterate",
    ],
    tools: ["CRM Systems", "Custom Dashboards", "Cloud Infrastructure"],
    images: ["/services/business1.jpg", "/services/business2.jpg"],
    projects: [
      {
        name: "Client360",
        desc: "Integrated CRM system with analytics and support modules.",
      },
      {
        name: "SmartOps Suite",
        desc: "Business automation tools for SMEs and startups.",
      },
    ],
  },
];

const Services = () => {
  const [openProjectModal, setOpenProjectModal] = useState(null);
  const [tab, setTab] = useState(0);
  const [lightboxImg, setLightboxImg] = useState(null);

  const sliderSettings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  const typingText = "Services";

  return (
    <Box
      id="services"
      sx={{ py: 10, background: "linear-gradient(135deg, #e0f7fa, #f1f8e9)", }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 1,
          }}
        >
          <Typography
            variant="h4"
            align="center"
            fontWeight="bold"
            fontSize={{ xs: 28, sm: 36 }}
            sx={{
              background: "linear-gradient(to right, #00796b, #43a047)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 1,
            }}
          >
            Services
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Typography
            align="center"
            fontSize={{ xs: 14, sm: 16 }}
            sx={{
              maxWidth: 700,
              mx: "auto",
              mb: 6,
              color: "text.secondary",
              fontStyle: "italic",
            }}
          >
            Empowering Growth with Tailored Solutions and Unparalleled Client
            Support
          </Typography>
        </motion.div>

        <Box sx={{ width: "100%", position: "relative", overflow: "hidden" }}>
          <Slider {...sliderSettings}>
            {services.map((service, index) => (
              <Box
                key={index}
                component={motion.div}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                sx={{
                  px: { xs: 2, sm: 4 },
                  py: { xs: 3, md: 6 },
                  maxWidth: "100vw",
                  boxSizing: "border-box",
                  overflowX: "hidden",
                }}
              >
                <Box
                  display="flex"
                  alignItems="center"
                  gap={2}
                  mb={2}
                  component={motion.div}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ type: "spring", stiffness: 80, damping: 15 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring" }}
                  >
                    {service.icon}
                  </motion.div>
                  <Typography variant="h5" fontWeight="bold">
                    {service.title}
                  </Typography>
                </Box>

                <Typography
                  fontSize={{ xs: 14, sm: 16 }}
                  color="text.secondary"
                  mb={2}
                >
                  {service.description}
                </Typography>

                {service.images && (
                  <Box display="flex" gap={2} flexWrap="wrap" mb={3}>
                    {service.images.map((img, idx) => (
                      <Box
                        key={idx}
                        onClick={() => setLightboxImg(img)}
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          maxWidth: 140,
                          transition: "transform 0.4s ease",
                          "&:hover": {
                            transform: "scale(1.05)",
                            cursor: "pointer",
                          },
                        }}
                      >
                        <Box
                          component="img"
                          src={img}
                          alt={`Service Image ${idx + 1}`}
                          sx={{
                            width: "100%",
                            height: { xs: 70, sm: 90 },
                            objectFit: "cover",
                            borderRadius: 2,
                            boxShadow: 1,
                          }}
                        />
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          mt={1}
                        >
                          {service.title} Image {idx + 1}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                )}

                {service.steps && (
                  <>
                    <Typography variant="subtitle1" fontWeight="bold" mb={1}>
                      How We Work
                    </Typography>
                    <Grid container spacing={2}>
                      {service.steps.map((step, idx) => (
                        <Grid item xs={12} sm={6} key={idx}>
                          <Box
                            sx={{
                              p: 2,
                              background: "#ffffffaa",
                              borderRadius: 2,
                              borderLeft: "4px solid #00c853",
                            }}
                          >
                            <Typography variant="body2">
                              <strong>{idx + 1}.</strong> {step}
                            </Typography>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </>
                )}

                {service.tools && (
                  <>
                    <Typography
                      variant="subtitle1"
                      fontWeight="bold"
                      mt={4}
                      mb={1}
                    >
                      Tools / Technologies
                    </Typography>
                    <Box display="flex" gap={2} flexWrap="wrap">
                      {service.tools.map((tool, idx) => (
                        <Chip
                          key={idx}
                          label={tool}
                          variant="outlined"
                          color="success"
                        />
                      ))}
                    </Box>
                  </>
                )}

                {service.projects && (
                  <Box mt={4}>
                    <Typography variant="subtitle1" fontWeight="bold" mb={1}>
                      Projects
                    </Typography>
                    <Box sx={{ overflowX: "auto", maxWidth: "100vw" }}>
                      <Tabs
                        value={tab}
                        onChange={(e, newVal) => setTab(newVal)}
                        variant="scrollable"
                        scrollButtons="auto"
                        sx={{
                          borderBottom: "2px solid #c8e6c9",
                          "& .MuiTab-root": {
                            textTransform: "none",
                            fontWeight: "bold",
                            color: "#004d40",
                            whiteSpace: "nowrap",
                          },
                          "& .Mui-selected": {
                            color: "#2e7d32",
                          },
                        }}
                      >
                        {service.projects.map((proj, idx) => (
                          <Tab
                            key={idx}
                            label={proj.name}
                            onClick={() => setOpenProjectModal(proj)}
                          />
                        ))}
                      </Tabs>
                    </Box>
                  </Box>
                )}
              </Box>
            ))}
          </Slider>
        </Box>

        {/* Project Modal */}
        <Modal
          open={!!openProjectModal}
          onClose={() => setOpenProjectModal(null)}
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: { xs: "90%", sm: 400 },
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
              borderRadius: 2,
              outline: "none",
            }}
          >
            <IconButton
              onClick={() => setOpenProjectModal(null)}
              sx={{ position: "absolute", top: 8, right: 8 }}
            >
              <FaTimes />
            </IconButton>
            <Typography variant="h6" fontWeight="bold" mb={2}>
              {openProjectModal?.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {openProjectModal?.desc}
            </Typography>
          </Box>
        </Modal>

        {/* Lightbox */}
        <Dialog
          open={!!lightboxImg}
          onClose={() => setLightboxImg(null)}
          maxWidth="md"
        >
          <DialogContent sx={{ p: 0 }}>
            <Box
              component="img"
              src={lightboxImg}
              alt="lightbox"
              sx={{ width: "100%", maxHeight: "80vh", objectFit: "contain" }}
            />
          </DialogContent>
        </Dialog>
      </Container>
    </Box>
  );
};

export default Services;

// import React, { useState } from "react";
// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   Chip,
//   Tabs,
//   Tab,
//   Modal,
//   IconButton,
//   Dialog,
//   DialogContent,
//   Divider,
// } from "@mui/material";
// import { motion } from "framer-motion";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import {
//   FaRegCheckCircle,
//   FaUserGraduate,
//   FaLaptopCode,
//   FaUserTie,
//   FaChalkboardTeacher,
//   FaProjectDiagram ,
//   FaTimes
// } from "react-icons/fa";

// const services = [
//   {
//     title: "Skills Assessment",
//     icon: <FaRegCheckCircle size={28} color="#004d40" />,
//     description:
//       "We offer comprehensive skills assessment services across various sectors, ensuring accurate evaluation and certification of individuals' competencies. Our assessments align with industry standards and are conducted by qualified assessors using advanced methodologies and online technological platform.",
//     steps: [
//       "Understand sector requirements",
//       "Define assessment parameters",
//       "Deploy qualified assessors",
//       "Generate accurate certification reports",
//     ],
//     tools: ["Online Platform", "Secure Evaluation", "AI Scoring"],
//     images: ["/services/assessment1.jpg", "/services/assessment2.jpg"],
//     projects: [
//       { name: "Assessment Portal", desc: "Web-based assessment solution for training centers." },
//       { name: "AI Evaluation System", desc: "Smart evaluation logic for remote assessments." },
//     ],
//   },
//   {
//     title: "Skill Gap Analysis",
//     icon: <FaUserGraduate size={28} color="#004d40" />,
//     description:
//       "Through our skill gap analysis services, we help businesses identify areas where their employees may require further training or development. By assessing the existing skill sets and analyzing the desired competencies, we provide insights to bridge the gap and foster continuous improvement within organizations.",
//     steps: [
//       "Evaluate current competencies",
//       "Map to industry benchmarks",
//       "Analyze and report gap insights",
//       "Propose upskilling path",
//     ],
//     tools: ["Reports", "Data Analytics", "Visual Dashboards"],
//     images: ["/services/gapanalysis.jpg"],
//   },
//   {
//     title: "Software Solutions",
//     icon: <FaLaptopCode size={28} color="#004d40" />,
//     description:
//       "we specialize in delivering cutting-edge software solutions that empower businesses to streamline their operations, enhance efficiency, and drive growth. Our tailored solutions cater to diverse industries, ensuring seamless integration and optimized performance to meet your unique needs.",
//     steps: [
//       "Requirement Analysis",
//       "UI/UX & Prototyping",
//       "Agile Development",
//       "Testing & Deployment",
//     ],
//     tools: ["React", "Node.js", "MongoDB", "Firebase"],
//     images: ["/services/software1.jpg", "/services/software2.jpg"],
//     projects: [
//       { name: "ERP System", desc: "Modular ERP for SMEs with inventory and HR modules." },
//       { name: "E-learning Portal", desc: "Interactive LMS with gamified assessments." },
//     ],
//   },
//   {
//     title: "Manpower Solutions",
//     icon: <FaUserTie size={32} color="#00c853" />,
//     description:
//       "Demorgia Consulting Services offers manpower solutions to assist businesses in sourcing, recruiting, and retaining skilled professionals. We understand the importance of a competent workforce and help organizations find the right talent to meet their specific requirements.",
//     steps: [
//       "Analyze staffing needs",
//       "Source qualified candidates",
//       "Conduct screening and onboarding",
//       "Ensure placement and performance tracking",
//     ],
//     tools: ["Recruitment Platforms", "ATS", "HR Analytics"],
//     images: ["/services/manpower1.jpg", "/services/manpower2.jpg"],
//     projects: [
//       { name: "Workforce Finder", desc: "Platform to connect employers with verified skilled workers." },
//       { name: "Hiring Suite", desc: "Applicant tracking and recruitment automation system." },
//     ],
//   },
//   {
//     title: "Training and Development",
//     icon: <FaChalkboardTeacher size={32} color="#00c853" />,
//     description:
//       "We offer training programs and workshops designed to enhance individuals' skills and knowledge in various domains. Our industry-specific training modules focus on improving practical abilities, soft skills, and professional development, empowering individuals to excel in their careers.",
//     steps: [
//       "Identify learning goals",
//       "Design training modules",
//       "Deliver workshops and sessions",
//       "Evaluate progress and feedback",
//     ],
//     tools: ["LMS", "E-learning Tools", "Interactive Content"],
//     images: ["/services/training1.jpg", "/services/training2.jpg"],
//     projects: [
//       { name: "SkillBoost", desc: "A platform offering curated training for industry professionals." },
//       { name: "Virtual Classroom", desc: "Live instructor-led training with assessment tools." },
//     ],
//   },
//   {
//     title: "Business Solutions",
//     icon: <FaProjectDiagram size={32} color="#00c853" />,
//     description:
//       "As technology enthusiasts, we are always exploring new tools and frameworks to stay at the cutting edge of innovation. We stays up-to-date with the latest trends in web and mobile development, ensuring that applications are built using the most advanced and efficient technologies available.",
//     steps: [
//       "Understand business pain points",
//       "Propose tailored tech solutions",
//       "Develop scalable systems",
//       "Monitor performance and iterate",
//     ],
//     tools: ["CRM Systems", "Custom Dashboards", "Cloud Infrastructure"],
//     images: ["/services/business1.jpg", "/services/business2.jpg"],
//     projects: [
//       { name: "Client360", desc: "Integrated CRM system with analytics and support modules." },
//       { name: "SmartOps Suite", desc: "Business automation tools for SMEs and startups." },
//     ],
//   },
// ];

// const Services = () => {
//   const [openProjectModal, setOpenProjectModal] = useState(null);
//   const [tab, setTab] = useState(0);
//   const [lightboxImg, setLightboxImg] = useState(null);

//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 700,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     pauseOnHover: true,
//     arrows: false,
//   };

//   return (
//     <Box id="services" sx={{ py: 10, background: "linear-gradient(to right, #f1f8e9, #e0f7fa)" }}>
//       <Container>
//         <motion.div initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
//           <Typography variant="h4" align="center" fontWeight="bold" fontSize={{ xs: 24, sm: 32 }} gutterBottom>
//             Services
//           </Typography>
//           <Typography
//             align="center"
//             fontSize={{ xs: 14, sm: 16 }}
//             sx={{ maxWidth: 700, mx: "auto", mb: 6, color: "text.secondary" }}
//           >
//             Empowering Growth with Tailored Solutions and Unparalleled Client Support
//           </Typography>
//         </motion.div>

//         <Slider {...sliderSettings}>
//           {services.map((service, index) => (
//             <Box
//               key={index}
//               component={motion.div}
//               initial={{ opacity: 0, scale: 0.95 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//               sx={{ px: { xs: 1, sm: 2, md: 6 }, py: { xs: 3, md: 6 } }}
//             >
// <Box
//   display="flex"
//   alignItems="center"
//   gap={2}
//   mb={2}
//   component={motion.div}
//   initial={{ opacity: 0, x: -30 }}
//   whileInView={{ opacity: 1, x: 0 }}
//   transition={{ type: "spring", stiffness: 80, damping: 15, delay: index * 0.1 }}
// >
//   <motion.div
//     initial={{ scale: 0 }}
//     whileInView={{ scale: 1 }}
//     transition={{ type: "spring", stiffness: 120, damping: 8 }}
//   >
//     {service.icon}
//   </motion.div>
//   <Typography variant="h5" fontWeight="bold">
//     {service.title}
//   </Typography>
// </Box>

//               <Typography fontSize={{ xs: 14, sm: 16 }} color="text.secondary" mb={2}>
//                 {service.description}
//               </Typography>

//               {service.images && (
//                 <Box display="flex" gap={2} flexWrap="wrap" mb={3}>
//                   {service.images.map((img, idx) => (
//                     <Box
//                       key={idx}
//                       sx={{
//                         display: "flex",
//                         flexDirection: "column",
//                         alignItems: "center",
//                         maxWidth: { xs: 100, sm: 140 },
//                         transition: "transform 0.4s ease",
//                         "&:hover": { transform: "scale(1.05)", cursor: "pointer" },
//                       }}
//                       onClick={() => setLightboxImg(img)}
//                     >
//                       <Box
//                         component="img"
//                         src={img}
//                         alt={`${service.title} Image ${idx + 1}`}
//                         sx={{
//                           width: "100%",
//                           height: { xs: 70, sm: 90 },
//                           objectFit: "cover",
//                           borderRadius: 2,
//                           boxShadow: 1,
//                         }}
//                       />
//                       <Typography variant="caption" color="text.secondary" mt={1}>
//                         {service.title} Image {idx + 1}
//                       </Typography>
//                     </Box>
//                   ))}
//                 </Box>
//               )}

//               {service.steps && (
//                 <>
//                   <Typography variant="subtitle1" fontWeight="bold" mb={1}>
//                     How We Work
//                   </Typography>
//                   <Grid container spacing={2}>
//                     {service.steps.map((step, idx) => (
//                       <Grid item xs={12} sm={6} key={idx}>
//                         <Box
//                           sx={{
//                             p: 2,
//                             background: "#ffffffaa",
//                             borderRadius: 2,
//                             borderLeft: "4px solid #00c853",
//                           }}
//                         >
//                           <Typography variant="body2">
//                             <strong>{idx + 1}.</strong> {step}
//                           </Typography>
//                         </Box>
//                       </Grid>
//                     ))}
//                   </Grid>
//                 </>
//               )}

//               {service.tools && (
//                 <>
//                   <Typography variant="subtitle1" fontWeight="bold" mt={4} mb={1}>
//                     Tools / Technologies
//                   </Typography>
//                   <Box display="flex" gap={2} flexWrap="wrap">
//                     {service.tools.map((tool, idx) => (
//                       <Chip key={idx} label={tool} variant="outlined" color="success" />
//                     ))}
//                   </Box>
//                 </>
//               )}

//               {service.projects && (
//                 <Box mt={4}>
//                   <Typography variant="subtitle1" fontWeight="bold" mb={1}>
//                     Projects
//                   </Typography>
//                   <Tabs
//                     value={tab}
//                     onChange={(e, newVal) => setTab(newVal)}
//                     variant="scrollable"
//                     scrollButtons="auto"
//                     sx={{
//                       borderBottom: "2px solid #c8e6c9",
//                       "& .MuiTab-root": {
//                         textTransform: "none",
//                         fontWeight: "bold",
//                         color: "#004d40",
//                       },
//                       "& .Mui-selected": {
//                         color: "#2e7d32",
//                       },
//                     }}
//                   >
//                     {service.projects.map((proj, idx) => (
//                       <Tab key={idx} label={proj.name} onClick={() => setOpenProjectModal(proj)} />
//                     ))}
//                   </Tabs>
//                 </Box>
//               )}

//               {/* Divider Between Services */}
//               <Divider
//                 sx={{
//                   my: 5,
//                   height: 3,
//                   width: "100%",
//                   background: "linear-gradient(to right, #b2dfdb, #c8e6c9)",
//                   borderRadius: 4,
//                 }}
//               />
//             </Box>
//           ))}
//         </Slider>

//         {/* Project Modal */}
//         <Modal open={!!openProjectModal} onClose={() => setOpenProjectModal(null)}>
//           <Box
//             sx={{
//               position: "absolute",
//               top: "50%",
//               left: "50%",
//               transform: "translate(-50%, -50%)",
//               width: { xs: "90%", sm: 400 },
//               bgcolor: "background.paper",
//               boxShadow: 24,
//               p: 4,
//               borderRadius: 2,
//               outline: "none",
//             }}
//           >
//             <IconButton
//               onClick={() => setOpenProjectModal(null)}
//               sx={{ position: "absolute", top: 8, right: 8 }}
//             >
//               <FaTimes />
//             </IconButton>
//             <Typography variant="h6" fontWeight="bold" mb={2}>
//               {openProjectModal?.name}
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               {openProjectModal?.desc}
//             </Typography>
//           </Box>
//         </Modal>

//         {/* Image Lightbox */}
//         <Dialog open={!!lightboxImg} onClose={() => setLightboxImg(null)} maxWidth="md">
//           <DialogContent sx={{ p: 0 }}>
//             <Box
//               component="img"
//               src={lightboxImg}
//               alt="lightbox"
//               sx={{
//                 width: "100%",
//                 maxHeight: "80vh",
//                 objectFit: "contain",
//               }}
//             />
//           </DialogContent>
//         </Dialog>
//       </Container>
//     </Box>
//   );
// };

// export default Services;
