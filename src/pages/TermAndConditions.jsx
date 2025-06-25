import React from "react";
import { Box, Container, Typography, Divider } from "@mui/material";
import { motion } from "framer-motion";

const TermsAndConditions = () => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      sx={{
        py: 10,
        minHeight: "100vh",
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          background: "white",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          p: 4,
        }}
      >
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Terms and Conditions
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
          Effective Date: [Insert Date]
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" gutterBottom fontWeight="bold">
          By accessing and using Demorgia Consulting Services Pvt Ltd’s
          ("Demorgia") services, you agree to comply with and be bound by the
          following terms and conditions:
        </Typography>

        <Box sx={{ mt: 3 }}>
          {[
            {
              title: "Usage of Services:",
              points: [
                "Services are to be used lawfully and ethically.",
                "Any fraudulent or unauthorized activity is strictly prohibited.",
              ],
            },
            {
              title: "Intellectual Property:",
              points: [
                "All content and technology used by Demorgia are proprietary.",
                "Unauthorized use, copying, or distribution is prohibited without explicit permission.",
              ],
            },
            {
              title: "User Responsibilities:",
              points: [
                "Provide accurate and complete information.",
                "Maintain confidentiality of login credentials.",
              ],
            },
            {
              title: "Limitation of Liability:",
              points: [
                "Demorgia is not liable for any indirect or consequential damages.",
                "Maximum liability will be limited to the amount paid by you for the services.",
              ],
            },
            {
              title: "Modifications:",
              points: [
                "Demorgia reserves the right to update terms at any time.",
                "Users will be notified of significant changes.",
              ],
            },
            {
              title: "Governing Law:",
              points: [
                "These terms are governed by the laws of India. Any disputes shall be resolved in the courts of Noida, Uttar Pradesh.",
              ],
            },
          ].map((section, idx) => (
            <Box key={idx} sx={{ mt: 3 }}>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                {section.title}
              </Typography>
              {section.points.map((point, i) => (
                <Typography variant="body2" gutterBottom key={i}>
                  • {point}
                </Typography>
              ))}
            </Box>
          ))}

          <Divider sx={{ my: 4 }} />

          <Typography variant="body2">
            For any queries regarding our Privacy Policy or Terms and
            Conditions, please contact us at{" "}
            <a
              href="mailto:hrd@demorgia.com"
              style={{ color: "#00796b", textDecoration: "none" }}
            >
              hrd@demorgia.com
            </a>
            .
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default TermsAndConditions;
