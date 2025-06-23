import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  TextField,
  Button,
  Divider,
} from "@mui/material";
import {
  Facebook,
  Twitter,
  Instagram,
  Google,
  LinkedIn,
} from "@mui/icons-material";
import { Link } from "react-router-dom";


const footerLinks = [
  { label: "Home", path: "/" },
  { label: "About us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Terms of service", path: "/terms-of-service" },
  { label: "Privacy policy", path: "/privacy-policy" },
  { label: "Safe Workplace Policy", path: "/safe-workplace-policy" },
  { label: " Grievance", path: "" },
];

const Footer = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(to right, #ffffff, #00bfff, #00ff7f)",
        width: "100%",
        py: 6,
        color: "#111",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Logo and Description */}
          <Grid item xs={12} md={3}>
            <Box mb={2}>
              <img src="/logo.png" alt="Demorgia" style={{ height: 60 }} />
            </Box>
            <Typography variant="body2">
              Empowering Individuals and Industries through Accurate
              Assessments, Strategic Consultancy, and Innovative Solutions.
               <strong>Unlocking Potential, Driving Growth.</strong>
            </Typography>
          </Grid>

          {/* Useful Links */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              USEFUL LINKS
            </Typography>
            <Divider sx={{ width: 40, bgcolor: "#00ff7f", mb: 1 }} />
            {footerLinks.map(({ label, path }, i) => (
    <Typography
      key={i}
      variant="body2"
      component={Link}
      to={path}
      sx={{
        cursor: "pointer",
        textDecoration: "none",
        color: "inherit",
        mb: 1,
        display: "block",
        "&:hover": { color: "#003300" },
      }}
    >
      › {label}
    </Typography>
  ))}
          </Grid>

          {/* Contact */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              CONTACT US
            </Typography>
            <Divider sx={{ width: 40, bgcolor: "#00ff7f", mb: 1 }} />
            <Typography variant="body2">
              Unit 14, Tower A, 9th Floor<br />
              Logix Cyber Park<br />
              Noida 62, UP 201309<br />
              India<br /><br />
              <strong>Phone:</strong> +91-120-3229282<br />
              <strong>Phone:</strong> +91-120-3116273<br />
              <strong>Email:</strong> hrd@demorgia.com
            </Typography>
          </Grid>

          {/* Group Company */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              GROUP COMPANY
            </Typography>
            <Divider sx={{ width: 40, bgcolor: "#00ff7f", mb: 1 }} />
            <Typography variant="body2" mb={2}>
              <strong>"Vikram Aviation Pvt Ltd"</strong> <br />
              'Trusted Partner for Precision Calibration, Expert Repairs,
              Composite Maintenance, and Consumable Solutions.'<br />
              Our group company fosters collaborative excellence across
              industries, uniting innovation and expertise.
            </Typography>
            <Box display="flex">
              <TextField
                size="small"
                placeholder="NEWSLETTER"
                variant="outlined"
                InputProps={{
                  sx: {
                    bgcolor: "white",
                    borderRadius: "4px 0 0 4px",
                    color: "#000",
                    fontWeight: 500,
                  },
                }}
                fullWidth
              />
              <Button
                variant="contained"
                sx={{
                  bgcolor: "green",
                  color: "white",
                  borderRadius: "0 4px 4px 0",
                  px: 3,
                  "&:hover": { bgcolor: "#007f3f" },
                }}
              >
                SUBSCRIBE
              </Button>
            </Box>
             <Box mt={2}>
              {[Twitter, Facebook, Instagram, Google, LinkedIn].map(
                (Icon, i) => (
                  <IconButton
                    key={i}
                    sx={{
                      color: "white",
                      "&:hover": { color: "#003300" },
                    }}
                  >
                    <Icon />
                  </IconButton>
                )
              )}
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Bar */}
        <Box mt={6} textAlign="center">
          <Divider sx={{ bgcolor: "#006400", mb: 2 }} />
          <Typography variant="body2" sx={{ color: "#111" }}>
            © Copyright{" "}
            <strong>Demorgia Consulting Services Pvt Ltd</strong>. All Rights
            Reserved
          </Typography>
          
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
