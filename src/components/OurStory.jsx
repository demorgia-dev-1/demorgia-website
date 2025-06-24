import React from "react";
import { Box, Container, Typography, Card, CardContent, useTheme } from "@mui/material";

const milestones = [
  {
    year: "2009",
    title: "Foundation",
    description: "Established Demorgia Consulting, starting operations from Noida (Delhi NCR)."
  },
  {
    year: "2012",
    title: "Incorporation",
    description: "Official incorporation of Demorgia Consulting Services Pvt Ltd."
  },
  {
    year: "2012–2018",
    title: "Pan-India Expansion",
    description: "Expanded operations across India and began partnerships with multiple Sector Skill Councils (SSCs)."
  },
  {
    year: "2019",
    title: "Tech & Quality Leap",
    description: "Launched ProctorPro & received ISO 9001:2015 certification."
  },
  {
    year: "2020–2022",
    title: "NCVET Accreditation",
    description: "Recognized as NCVET-accredited; executed 5+ lakh assessments and CSR projects."
  },
  {
    year: "2023–Present",
    title: "Nationwide Reach",
    description: "Reached 10 lakh assessments, 25000+ RPLs, awarded by CSDCI, held 250+ job fairs."
  },
  {
    year: "Future",
    title: "Innovation & Inclusion",
    description: "Focusing on drone certifications, AI for differently-abled, and deeper education partnerships."
  }
];

const OurStory = () => {
  const theme = useTheme();

  return (
    <Box sx={{ py: 10, bgcolor: "white" }}>
      <Container maxWidth="md">
        {/* Section Header */}
        <Box sx={{ mb: 5, textAlign: "center" }}>
          <Typography variant="h4" fontWeight="bold">
            Our <Box component="span" color="primary.main">Story</Box>
          </Typography>
        </Box>

        {/* Intro Paragraph */}
        <Typography
          variant="body1"
          color="text.secondary"
          textAlign="center"
          mb={6}
        >
          Demorgia Consulting Services Pvt. Ltd. has consistently contributed to the national mission of skill development since its inception. Here’s a timeline of our key milestones:
        </Typography>

        {/* Uniform Width Cards */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4
          }}
        >
          {milestones.map((item, index) => (
            <Card
              key={index}
              elevation={6}
              sx={{
                borderLeft: `6px solid ${theme.palette.primary.main}`,
                borderRadius: 3,
                transition: "0.3s",
                maxWidth: "600px",
                width: "100%",
                ":hover": { transform: "scale(1.01)", boxShadow: 8 }
              }}
            >
              <CardContent>
                <Typography variant="h6" color="primary" fontWeight="bold" gutterBottom>
                  {item.year}
                </Typography>
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default OurStory;
