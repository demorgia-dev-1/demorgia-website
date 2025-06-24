// MilestoneCards.jsx
import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  useTheme,
  Container,
} from "@mui/material";
import { motion } from "framer-motion";
import TimelineIcon from "@mui/icons-material/Timeline";

const milestones = [
  {
    year: "2009",
    items: [
      "Established Demorgia Consulting, starting operations from Noida (Delhi NCR).",
    ],
  },
  {
    year: "2012",
    items: ["Official incorporation of Demorgia Consulting Services Pvt Ltd."],
  },
  {
    year: "2012–2018",
    items: [
      "Expanded operations to Jharkhand, Odisha, Karnataka, Maharashtra.",
      "Partnered with Sector Skill Councils (SSCs).",
    ],
  },
  {
    year: "2019",
    items: [
      "Received ISO 9001:2015 certification.",
      "Launched AI-based in-house platform 'ProctorPro'.",
    ],
  },
  {
    year: "2020–2022",
    items: [
      "Recognized as NCVET-accredited agency.",
      "Executed major CSR and govt projects.",
      "Conducted 5+ lakh assessments.",
    ],
  },
  {
    year: "2023–Present",
    items: [
      "10 lakh+ assessments completed.",
      "1850+ certified assessors, 310+ proctors.",
      "25000+ RPL candidates and 5000+ TOA/TOT sessions.",
      "Awarded Best Performing Assessment Agency by CSDCI.",
    ],
  },
  {
    year: "Future",
    items: [
      "Drone certifications via Vikram Aviation Pvt Ltd.",
      "AI-driven assistive solutions for differently-abled.",
      "Broaden industry partnerships in key sectors.",
      "ProctorPro feature enhancement & multilingual expansion.",
    ],
  },
];

const SuccessStory = () => {
  const theme = useTheme();

  return (
    <Box sx={{ py: 10, backgroundColor: "white" }}>
      <Container>
        <Typography
          variant="h4"
          textAlign="center"
          fontWeight="bold"
          gutterBottom
        >
          Our <span style={{ color: theme.palette.primary.main }}>Story</span>
        </Typography>

        <Grid container spacing={4} mt={4}>
          {milestones.map((milestone, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  variant="outlined"
                  sx={{
                    height: "100%",
                    borderRadius: 3,
                    borderColor: theme.palette.primary.light,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                    transition: "0.3s",
                    "&:hover": {
                      boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
                    },
                  }}
                >
                  <CardContent>
                    <Box display="flex" alignItems="center" mb={1}>
                      <TimelineIcon sx={{ color: "primary.main", mr: 1 }} />
                      <Typography variant="h6" fontWeight="bold">
                        {milestone.year}
                      </Typography>
                    </Box>
                    <Box component="ul" sx={{ pl: 2, mb: 0 }}>
                      {milestone.items.map((item, i) => (
                        <li key={i}>
                          <Typography
                            variant="body2"
                            sx={{ mb: 1, color: "text.secondary" }}
                          >
                            {item}
                          </Typography>
                        </li>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default SuccessStory;
