import React from "react";
import {
  Box,
  Container,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { motion } from "framer-motion";

const Grievance = () => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      sx={{ py: 10, minHeight: "100vh", backgroundColor: "#f5f5f5" }}
    >
      <Container
        maxWidth="md"
        sx={{
          background: "white",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          p: { xs: 3, sm: 5 },
          borderRadius: 3,
        }}
      >
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Grievance Redressal Policy
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="body1" gutterBottom>
          At <strong>Demorgia Consulting Services Pvt Ltd</strong>, we are committed to providing a transparent, fair,
          and efficient assessment experience. We understand that issues may
          occasionally arise, and we strive to resolve them in a timely and
          respectful manner through our Grievance Redressal System.
        </Typography>

        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
          Purpose
        </Typography>

        <Typography variant="body1" gutterBottom>
          This policy outlines the procedure for candidates to raise complaints
          or grievances related to assessments, platform issues, or results.
        </Typography>

        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
          Scope of Grievance
        </Typography>

        <Typography variant="body1" gutterBottom>
          Candidates can raise grievances related to:
        </Typography>

        <List dense>
          <ListItem>
            <ListItemText primary="Technical glitches during assessment (e.g., system crash, auto-submission)" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Result discrepancies or score mismatches" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Login/access issues" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Improper question display or misinterpretation" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Any other platform-related concern" />
          </ListItem>
        </List>

        <Divider sx={{ my: 4 }} />

        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Grievance Submission Process
        </Typography>

        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          Email Submission:
        </Typography>

        <Typography variant="body1" gutterBottom>
          Alternatively, candidates may email their grievance to:{" "}
          <strong>grievance@yourportal.com</strong>  
          Please include the following details:
        </Typography>

        <List dense>
          <ListItem>
            <ListItemText primary="Full Name" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Registered Email ID" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Assessment Name & Date" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Description of the issue" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Relevant documents/screenshots (if applicable)" />
          </ListItem>
        </List>

        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
          Acknowledgement & Resolution
        </Typography>

        <List dense>
          <ListItem>
            <ListItemText primary="Acknowledgement: Within 48 hours of grievance submission" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Resolution Timeline: Within 5–7 working days from the date of acknowledgment" />
          </ListItem>
          <ListItem>
            <ListItemText primary="If further time is required, the candidate will be informed with a revised resolution date." />
          </ListItem>
        </List>

        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
          Contact Information
        </Typography>

        <List dense>
          <ListItem>
            <ListItemText primary="Grievance Officer" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Name: [Full Name]" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Email: grievance@yourportal.com" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Phone: [+91-XXXXXXXXXX]" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Working Hours: Monday to Friday, 10:00 AM – 6:00 PM" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Office Address: [Organization Name, Address Line 1, City, State, Pincode]" />
          </ListItem>
        </List>

        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
          Note:
        </Typography>
        <Typography variant="body1">
          All grievances must be genuine and supported with relevant information
          for prompt redressal. False or misleading complaints may lead to
          disqualification or action as per portal policy.
        </Typography>
      </Container>
    </Box>
  );
};

export default Grievance;
