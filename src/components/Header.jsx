import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItemText,
  ListItemButton,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "/logo.png";
import { motion } from "framer-motion";

const navLinks = ["About", "Services", "Partners", "Contact"];

function Header({ onNavigate = {} }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        background: "linear-gradient(to right, #ffffff, #00bfff, #00ff7f)",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        width: "100%",
        zIndex: 1300,
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          px: { xs: 1, sm: 2 },
          minHeight: { xs: 64, sm: 72 },
        }}
      >
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <motion.img
            src={logo}
            alt="Logo"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            style={{
              height: 50,
              width: "auto",
              objectFit: "contain",
              padding: "5px 10px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
            onClick={onNavigate.home}
          />
        </Box>

        {/* Desktop Navigation */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
          {navLinks.map((text) => (
            <motion.div key={text} whileHover={{ scale: 1.1 }}>
              <Typography
                onClick={onNavigate[text.toLowerCase()]}
                sx={{
                  color: "#fff",
                  textDecoration: "none",
                  fontWeight: 500,
                  fontSize: "1.2rem",
                  px: 1,
                  cursor: "pointer",
                  "&:hover": {
                    textDecoration: "underline",
                    color: "#fff",
                  },
                }}
              >
                {text}
              </Typography>
            </motion.div>
          ))}
        </Box>

        {/* Mobile Menu Icon */}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Box>

        {/* Mobile Drawer */}
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
          PaperProps={{
            sx: { background: "#f9f9f9" },
          }}
        >
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <Box
              sx={{
                py: 2,
                px: 2,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img src={logo} alt="Logo" height={40} />
            </Box>
            <Divider />
            <List>
              {navLinks.map((text) => (
                <ListItemButton
                  key={text}
                  onClick={onNavigate[text.toLowerCase()]}
                  sx={{
                    px: 3,
                    py: 1.5,
                    "&:hover": {
                      backgroundColor: "#e0f7fa",
                    },
                  }}
                >
                  <ListItemText
                    primary={text}
                    primaryTypographyProps={{
                      fontWeight: 500,
                      fontSize: "1rem",
                      color: "#333",
                    }}
                  />
                </ListItemButton>
              ))}
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
