import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Typography,
  Dialog,
  DialogContent,
  IconButton,
  Tabs,
  Tab,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

// Original image list
const allItems = [
  { src: "/portfolio/ncvet1.jpg", title: "NCVET Recognition", category: "app" },
  { src: "/portfolio/perform1.jpg", title: "Best Performing Agency", category: "card" },
  { src: "/portfolio/jobmela1.jpg", title: "Job Mela", category: "web" },
  { src: "/portfolio/ncvet2.jpg", title: "NCVET Recognition", category: "app" },
  { src: "/portfolio/perform2.jpg", title: "Best Performing Agency", category: "card" },
  { src: "/portfolio/jobmela2.jpg", title: "Job Mela", category: "web" },
  { src: "/portfolio/ncvet3.jpg", title: "NCVET Recognition", category: "app" },
  { src: "/portfolio/perform3.jpg", title: "Best Performing Agency", category: "card" },
  { src: "/portfolio/jobmela3.jpg", title: "Job Mela", category: "web" },
];

// Filter Tabs
const tabs = [
  { label: "All", value: "*" },
  { label: "NCVET Recognition", value: "app" },
  { label: "Best Performing Agency", value: "card" },
  { label: "Job Mela", value: "web" },
];

const PortfolioStraightReel = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [activeFilter, setActiveFilter] = useState("*");
  const theme = useTheme();
  const scrollRef = useRef(null);

  // Filtered Items
  const filteredItems =
    activeFilter === "*"
      ? allItems
      : allItems.filter((item) => item.category === activeFilter);

  // Auto-scroll animation
  useEffect(() => {
    const scroller = scrollRef.current;
    let scrollInterval;

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (scroller) {
          const maxScrollLeft = scroller.scrollWidth - scroller.clientWidth;
          if (scroller.scrollLeft >= maxScrollLeft) {
            scroller.scrollLeft = 0;
          } else {
            scroller.scrollLeft += 2;
          }
        }
      }, 3);
    };

    startAutoScroll();
    return () => clearInterval(scrollInterval);
  }, [filteredItems]);

  return (
    <Box
      id="portfolio"
      sx={{
        py: 10,
        background: "linear-gradient(to right, #f1f8e9, #e0f7fa)",
        overflowX: "hidden",
      }}
    >
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
        Our Portfolio
      </Typography>
      <Typography
        align="center"
        sx={{ maxWidth: 700, mx: "auto", mb: 4, color: "text.secondary" }}
      >
        A streamlined showcase of our recognition, achievements, and major events — scroll through our proud moments.
      </Typography>

      {/* Filter Tabs */}
      <Box sx={{ mb: 4, display: "flex", justifyContent: "center" }}>
        <Tabs
          value={activeFilter}
          onChange={(e, newVal) => setActiveFilter(newVal)}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          sx={{
            ".MuiTab-root": {
              textTransform: "none",
              fontWeight: 600,
              color: "text.secondary",
            },
            ".Mui-selected": {
              color: theme.palette.success.main,
            },
          }}
        >
          {tabs.map((tab) => (
            <Tab key={tab.value} label={tab.label} value={tab.value} />
          ))}
        </Tabs>
      </Box>

      {/* Scrollable Reel */}
      <Box
        ref={scrollRef}
        component={motion.div}
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        sx={{
          display: "flex",
          gap: 3,
          overflowX: "auto",
          px: 3,
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          pb: 2,
        }}
      >
        {filteredItems.map((item, index) => (
          <Box
            key={index}
            onClick={() => setSelectedImg(item)}
            component={motion.div}
            whileHover={{ scale: 1.05 }}
            sx={{
              minWidth: 280,
              scrollSnapAlign: "center",
              cursor: "pointer",
              backgroundColor: "#fff",
              border: "1px solid black",
              overflow: "hidden",
            }}
          >
            <Box
              component="img"
              src={item.src}
              alt={item.title}
              sx={{
                width: "100%",
                height: 180,
                objectFit: "cover",
              }}
            />
            <Box sx={{ p: 2 }}>
              <Typography variant="subtitle1" fontWeight="bold">
                {item.title}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Lightbox */}
      <Dialog open={!!selectedImg} onClose={() => setSelectedImg(null)} maxWidth="md">
        <DialogContent sx={{ position: "relative", p: 0 }}>
          <IconButton
            onClick={() => setSelectedImg(null)}
            sx={{ position: "absolute", top: 8, right: 8, zIndex: 1 }}
          >
            <FaTimes />
          </IconButton>
          <img
            src={selectedImg?.src}
            alt={selectedImg?.title}
            style={{ width: "100%", maxHeight: "80vh", objectFit: "contain" }}
          />
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default PortfolioStraightReel;
