// import React from "react";
// import {
//   Box,
//   Typography,
//   Stack,
//   TextField,
//   Button,
//   Link,
//   useTheme,
//   keyframes,
// } from "@mui/material";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import PhoneIcon from "@mui/icons-material/Phone";
// import EmailIcon from "@mui/icons-material/Email";

// // Animation keyframes
// const fadeInUp = keyframes`
//   0% { opacity: 0; transform: translateY(30px); }
//   100% { opacity: 1; transform: translateY(0); }
// `;

// const Contact = () => {
//   const theme = useTheme();

//   return (
//     <Box
//       id="contact"
//       sx={{
//         py: 10,
//         px: { xs: 2, sm: 6 },
//         background: "linear-gradient(to right, #e0f7fa, #f3f4f6)",
//       }}
//     >
//       {/* Heading */}
//       <Typography
//         variant="h4"
//         align="center"
//         fontWeight={700}
//         mb={1}
//         sx={{
//           animation: `${fadeInUp} 0.8s ease-in-out both`,
//         }}
//       >
//         Contact <span style={{ color: theme.palette.primary.main }}>Us</span>
//       </Typography>
//       <Typography
//         variant="subtitle1"
//         align="center"
//         mb={6}
//         sx={{ animation: `${fadeInUp} 1s ease-in-out both` }}
//       >
//         Let's Connect and Unlock Your Potential!
//       </Typography>

//       {/* Flex Layout */}
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: { xs: "column", md: "row" },
//           justifyContent: "center",
//           alignItems: "flex-start",
//           gap: 4,
//           flexWrap: "wrap",
//         }}
//       >
//         {/* Left Side - Contact Info */}
//         <Box
//           sx={{
//             flex: 1,
//             minWidth: 300,
//             animation: `${fadeInUp} 1.2s ease-in-out both`,
//           }}
//         >
//           <Stack spacing={3}>
//             <Stack direction="row" spacing={2} alignItems="flex-start">
//               <LocationOnIcon color="primary" sx={{ fontSize: 28 }} />
//               <Box>
//                 <Typography fontWeight={600}>Address</Typography>
//                 <Typography variant="body2">
//                   Unit 14, Tower A, 9th Floor, Logix Cyber Park,<br />
//                   Noida 62, UP 201309, India
//                 </Typography>
//               </Box>
//             </Stack>

//             <Stack direction="row" spacing={2} alignItems="flex-start">
//               <PhoneIcon color="primary" sx={{ fontSize: 28 }} />
//               <Box>
//                 <Typography fontWeight={600}>Phone</Typography>
//                 <Typography variant="body2">
//                   <Link href="tel:+911203229282" underline="hover" color="inherit">
//                     +91-120-3229282
//                   </Link>
//                   <br />
//                   <Link href="tel:+911203116273" underline="hover" color="inherit">
//                     +91-120-3116273
//                   </Link>
//                 </Typography>
//               </Box>
//             </Stack>

//             <Stack direction="row" spacing={2} alignItems="flex-start">
//               <EmailIcon color="primary" sx={{ fontSize: 28 }} />
//               <Box>
//                 <Typography fontWeight={600}>Email</Typography>
//                 <Typography variant="body2">
//                   <Link href="mailto:hrd@demorgia.com" underline="hover" color="inherit">
//                     hrd@demorgia.com
//                   </Link>
//                 </Typography>
//               </Box>
//             </Stack>
//           </Stack>
//         </Box>

//         {/* Right Side - Form */}
//         <Box
//           component="form"
//           sx={{
//             flex: 1,
//             minWidth: 350,
//             backgroundColor: "#fff",
//             borderRadius: 3,
//             boxShadow: 4,
//             p: 4,
//             animation: `${fadeInUp} 1.4s ease-in-out both`,
//           }}
//         >
//           <Stack spacing={3}>
//             <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
//               <TextField
//                 label="Your Name"
//                 fullWidth
//                 variant="outlined"
//                 required
//               />
//               <TextField
//                 label="Your Email"
//                 type="email"
//                 fullWidth
//                 variant="outlined"
//                 required
//               />
//             </Stack>
//             <TextField
//               label="Subject"
//               fullWidth
//               variant="outlined"
//               required
//             />
//             <TextField
//               label="Message"
//               multiline
//               rows={5}
//               fullWidth
//               variant="outlined"
//               required
//             />
//             <Box textAlign="right">
//               <Button
//                 type="submit"
//                 variant="contained"
//                 sx={{
//                   px: 4,
//                   py: 1.5,
//                   borderRadius: 10,
//                   fontWeight: "bold",
//                   background: "linear-gradient(to right, #0288d1, #00acc1)",
//                   "&:hover": {
//                     background: "linear-gradient(to right, #0277bd, #00bcd4)",
//                   },
//                 }}
//               >
//                 SEND MESSAGE
//               </Button>
//             </Box>
//           </Stack>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Contact;

import React from "react";
import {
  Box,
  Typography,
  Stack,
  TextField,
  Button,
  Link,
  useTheme,
  keyframes,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const fadeInUp = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const Contact = () => {
  const theme = useTheme();

  return (
    <Box
      id="contact"
      sx={{
        py: 10,
        px: { xs: 2, sm: 6 },
        // background: "linear-gradient(to right, #e0f7fa, #f3f4f6)",
        background: "white",
      }}
    >
      {/* Heading */}
      <Typography
        variant="h4"
        align="center"
        fontWeight={700}
        mb={1}
        sx={{ animation: `${fadeInUp} 0.8s ease-in-out both` }}
      >
        Contact <span style={{ color: theme.palette.primary.main }}>Us</span>
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        mb={6}
        sx={{ animation: `${fadeInUp} 1s ease-in-out both` }}
      >
        Let's Connect and Unlock Your Potential!
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 4, md: 6 },
        }}
      >
        {/* Left Block */}
        <Box
          sx={{
            flexShrink: 0,
            maxWidth: 520,
            animation: `${fadeInUp} 1.2s ease-in-out both`,
          }}
        >
          <Stack spacing={4}>
            <Stack direction="row" spacing={2} alignItems="flex-start">
              <LocationOnIcon sx={{ color: "#0288d1", fontSize: 30 }} />
              <Box>
                <Typography fontWeight={700}>Address</Typography>
                <Typography variant="body2">
                  Unit 14, Tower A, 9th Floor, Logix Cyber Park,
                  <br />
                  Noida 62, UP 201309, India
                </Typography>
              </Box>
            </Stack>

            <Stack direction="row" spacing={2} alignItems="flex-start">
              <PhoneIcon sx={{ color: "#0288d1", fontSize: 30 }} />
              <Box>
                <Typography fontWeight={700}>Phone</Typography>
                <Typography variant="body2">
                  <Link href="tel:+911203229282" underline="hover">
                    +91-120-3229282
                  </Link>
                  <br />
                  <Link href="tel:+911203116273" underline="hover">
                    +91-120-3116273
                  </Link>
                </Typography>
              </Box>
            </Stack>

            <Stack direction="row" spacing={2} alignItems="flex-start">
              <EmailIcon sx={{ color: "#0288d1", fontSize: 30 }} />
              <Box>
                <Typography fontWeight={700}>Email</Typography>
                <Typography variant="body2">
                  <Link href="mailto:hrd@demorgia.com" underline="hover">
                    hrd@demorgia.com
                  </Link>
                </Typography>
              </Box>
            </Stack>
          </Stack>
        </Box>

        {/* Right Block (Form) */}
        <Box
          component="form"
          sx={{
            width: "100%",
            maxWidth: 520,
            backgroundColor: "#fff",
            borderRadius: 3,
            boxShadow: 4,
            p: 4,
            animation: `${fadeInUp} 1.4s ease-in-out both`,
          }}
        >
          <Stack spacing={3}>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextField label="Your Name " fullWidth required />
              <TextField label="Your Email " type="email" fullWidth required />
            </Stack>
            <TextField label="Subject " fullWidth required />
            <TextField
              label="Message "
              multiline
              rows={5}
              fullWidth
              required
            />
            <Box textAlign="right">
              <Button
                type="submit"
                variant="contained"
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: 10,
                  fontWeight: "bold",
                  background: "linear-gradient(to right, #0288d1, #00acc1)",
                  "&:hover": {
                    background: "linear-gradient(to right, #0277bd, #00bcd4)",
                  },
                }}
              >
                SEND MESSAGE
              </Button>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
