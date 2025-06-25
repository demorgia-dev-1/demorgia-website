
import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardMedia,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";

const images = [
  "/gallery/1.jpg", "/gallery/2.jpg", "/gallery/3.jpg", "/gallery/4.jpg",
  "/gallery/5.jpg", "/gallery/23.jpg", "/gallery/24.jpg", "/gallery/6.jpg", 
  "/gallery/7.jpg", "/gallery/16.jpg", "/gallery/9.jpg", "/gallery/20.jpg", 
  "/gallery/21.jpg", "/gallery/22.jpg", "/gallery/10.jpg", "/gallery/11.jpg", 
  "/gallery/12.jpg", "/gallery/13.jpg", "/gallery/14.jpg", "/gallery/15.jpg", 
  "/gallery/8.jpg", "/gallery/17.jpg", "/gallery/18.jpg", "/gallery/19.jpg",  
];

const videos = [
  "gallery/v1.mp4", "gallery/v3.mp4", "gallery/v4.mp4", 
]

const OurGallery = () => {
  const theme = useTheme();

  return (
    <Box sx={{ backgroundColor: "white"}}>
      <Container maxWidth="lg">
        {/* Heading */}
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          gutterBottom
        >
          Our <span style={{ color: theme.palette.primary.main }}>Gallery</span>
        </Typography>

        <Typography
          variant="body1"
          textAlign="center"
          color="text.secondary"
          mb={4}
        >
          Explore some snapshots of our proudest moments, events, and creations.
        </Typography>

        {/* Grid Layout */}
        <Grid container spacing={1.5}>
          {images.map((src, index) => (
            <Grid item xs={4} sm={3} md={2} key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                viewport={{ once: true }}
              >
                <Card
                  elevation={2}
                  sx={{
                    borderRadius: 2,
                    overflow: "hidden",
                    cursor: "pointer",
                    "&:hover img": {
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    image={src}
                    alt={`Gallery ${index + 1}`}
                    sx={{
                      height: 100,
                      width: 100,
                      objectFit: "cover",
                      transition: "transform 0.3s ease-in-out",
                    }}
                  />
                </Card>
              </motion.div>
            </Grid>
          ))}
          {videos.map((src, index) => (
  <Grid item xs={4} sm={3} md={2} key={index}>
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.02 }}
      viewport={{ once: true }}
    >
      <Card
        elevation={2}
        sx={{
          borderRadius: 2,
          overflow: "hidden",
          "&:hover video": {
            transform: "scale(1.02)",
          },
        }}
      >
        <video
          src={src}
          controls
          muted
          playsInline
          style={{
            width: 100,
            height: 100,
            objectFit: "cover",
            transition: "transform 0.3s ease-in-out",
          }}
        />
      </Card>
    </motion.div>
  </Grid>
))}

        </Grid>
      </Container>
    </Box>
  );
};

export default OurGallery;

