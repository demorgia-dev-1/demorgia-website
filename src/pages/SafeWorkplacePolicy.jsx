import React from "react";
import { Box, Container, Typography, Divider, Link } from "@mui/material";
import { motion } from "framer-motion";

const SafeWorkplacePolicy = () => {
  return (
    <Box sx={{ py: 10, backgroundColor: "#fefefe" }}>
      <Container
        maxWidth="md"
        sx={{
          p: 4,
          background: "white",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            textAlign="center"
            gutterBottom
          >
            Safe Workplace Policy
          </Typography>

          <Typography
            variant="h6"
            textAlign="center"
            sx={{ fontStyle: "italic", color: "#555", mb: 4 }}
          >
            Respect. Dignity. Safety. <br />
            Together, we foster a culture of equality and respect.
          </Typography>

          <Divider sx={{ mb: 3 }} />

          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Our Commitment
          </Typography>
          <Typography variant="body1" paragraph>
            At <strong>Demorgia</strong>, we are fully committed to maintaining
            a work environment that is safe, respectful, and free from any form
            of sexual harassment. In line with the{" "}
            <strong>
              Sexual Harassment of Women at Workplace (Prevention, Prohibition &
              Redressal) Act, 2013 (PoSH Act)
            </strong>
            , we adopt a zero-tolerance policy towards all forms of sexual
            harassment — whether verbal, non-verbal, physical, or online.
            Incidents will be dealt with strictly as per the law.
          </Typography>

          <Typography
            variant="h5"
            fontWeight="bold"
            gutterBottom
            sx={{ mt: 4 }}
          >
            What Constitutes Sexual Harassment?
          </Typography>
          <Typography component="ul" variant="body1" sx={{ pl: 3, mb: 3 }}>
            {[
              "Unwelcome sexual advances",
              "Requests or demands for sexual favours",
              "Sexually coloured remarks or jokes",
              "Inappropriate gestures or body language of a sexual nature",
              "Display of sexually explicit material (including pornography)",
              "Use of sexually abusive or suggestive language",
              "Unwanted physical contact or proximity",
              "Any behaviour (verbal, non-verbal, physical, or digital) that creates an intimidating or offensive work environment",
            ].map((point, i) => (
              <li key={i} style={{ marginBottom: 8 }}>
                {point}
              </li>
            ))}
          </Typography>

          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Reporting and Redressal
          </Typography>
          <Typography variant="body1" paragraph>
            If you experience or witness any form of sexual harassment, we
            encourage you to report it immediately. All complaints will be
            treated with sensitivity, confidentiality, and prompt action.
          </Typography>
          <Typography variant="body1" fontWeight="bold" sx={{ mb: 2 }}>
            📩 Email:{" "}
            <Link href="mailto:hrd@demorgia.com" underline="hover">
              hrd@demorgia.com
            </Link>
          </Typography>

          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Legal Framework
          </Typography>
          <Typography variant="body1">
            To know more about your rights under the law, download the official
            documents:
            <ul style={{ paddingLeft: "20px", marginTop: 8 }}>
              <li>
                <Link
                  href="/pdf/posh-act-english.pdf"
                  download
                  target="_blank"
                  rel="noopener"
                  underline="hover"
                >
                  📄 The PoSH Act, 2013 – English Version
                </Link>
              </li>
              <li>
                <Link
                  href="/pdf/posh-act-hindi.pdf"
                  download
                  target="_blank"
                  rel="noopener"
                  underline="hover"
                >
                  📄 The PoSH Act, 2013 – Hindi Version
                </Link>
              </li>
            </ul>
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
};

export default SafeWorkplacePolicy;
