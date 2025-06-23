import React from "react";
import { Box, Typography, Container, Divider } from "@mui/material";

const PrivacyPolicy = () => {
  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="md" sx={{
          background: "white",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          p: 4,
        }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Privacy Policy
        </Typography>

        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          Effective Date: [Insert Date]
        </Typography>

        <Typography paragraph>
          Demorgia Consulting Services Pvt Ltd ("Demorgia", "we", "our", or "us") is committed to safeguarding your privacy. This policy outlines how we collect, use, protect, and disclose personal information.
        </Typography>

        <Divider sx={{ my: 4 }} />

        <Typography variant="h6" gutterBottom>
          Information We Collect:
        </Typography>
        <ul>
          <li>
            <Typography>
              Name, contact details, educational and employment information for assessment purposes.
            </Typography>
          </li>
          <li>
            <Typography>
              Technical information such as IP address, device details, browser type.
            </Typography>
          </li>
        </ul>

        <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
          Use of Information:
        </Typography>
        <ul>
          <li>
            <Typography>Conduct assessments and deliver results.</Typography>
          </li>
          <li>
            <Typography>Enhance and personalize our services.</Typography>
          </li>
          <li>
            <Typography>
              Communicate updates, notifications, and promotional materials.
            </Typography>
          </li>
        </ul>

        <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
          Data Protection:
        </Typography>
        <ul>
          <li>
            <Typography>Implement industry-standard security measures.</Typography>
          </li>
          <li>
            <Typography>
              Restrict data access to authorized personnel only.
            </Typography>
          </li>
        </ul>

        <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
          Sharing of Information:
        </Typography>
        <ul>
          <li>
            <Typography>
              With affiliated organizations and regulatory authorities as necessary.
            </Typography>
          </li>
          <li>
            <Typography>
              When legally obligated by law enforcement or judicial processes.
            </Typography>
          </li>
        </ul>

        <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
          User Rights:
        </Typography>
        <ul>
          <li>
            <Typography>
              Request access, correction, or deletion of personal information.
            </Typography>
          </li>
          <li>
            <Typography>
              Opt-out of promotional communications at any time.
            </Typography>
          </li>
        </ul>
      </Container>
    </Box>
  );
};

export default PrivacyPolicy;