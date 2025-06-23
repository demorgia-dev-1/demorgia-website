import React from "react";
import { Box, Typography, Grid, Paper, useTheme } from "@mui/material";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const facts = [
  { label: "SSC Empanelled", value: 25 },
  { label: "Job Roles Assessed", value: 900 },
  { label: "Assessed Candidates", value: 1001303 },
  { label: "SME Engaged", value: 200 },
  { label: "Assessor/Proctor", value: 1000 },
  { label: "Projects", value: 100 },
];

const Facts = () => {
  const theme = useTheme();
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <Box
      id="facts"
      sx={{
        py: 10,
        // background: "linear-gradient(135deg, #e0f7fa, #f1f8e9)",
        background: "white",
        overflow: "hidden",
      }}
    >
      <Box sx={{ maxWidth: "lg", mx: "auto", px: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h4"
            align="center"
            fontWeight="bold"
            gutterBottom
          >
            Facts
          </Typography>
          <Typography
            align="center"
            sx={{ maxWidth: 800, mx: "auto", mb: 6, color: "text.secondary" }}
          >
            Our team's expertise spans various domains, including assessment
            excellence, strategic business consultancy, digital marketing
            proficiency, and talent acquisition. We help individuals unlock
            their potential and organizations achieve their goals.
          </Typography>
        </motion.div>

        <Grid container spacing={3} justifyContent="center" ref={ref}>
          {facts.map((fact, idx) => (
            <Grid item xs={6} sm={4} md={2} key={idx}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: idx * 0.15 }}
              >
                <Paper
                  elevation={4}
                  sx={{
                    p: 3,
                    textAlign: "center",
                    borderRadius: 4,
                    background: "white",
                    // minHeight: 140,
                  }}
                >
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    color={theme.palette.primary.main}
                  >
                    <CountUp
                      end={inView ? fact.value : 0}
                      duration={1.8}
                      separator=","
                    />
                    <span style={{ color: "#43a047", fontWeight: 600 }}>+</span>
                  </Typography>
                  <Typography variant="body2" mt={1} color="text.secondary">
                    {fact.label}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Facts;
