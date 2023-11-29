import React from "react";
import { Typography, Box } from "@mui/material";

const Header = () => (
  <Box sx={{ backgroundColor: "#f5f5f5", padding: "20px" }}>
    <Typography variant="h4" sx={{ color: "#333", textAlign: "center" }}>
      Realtime Chat App
    </Typography>
  </Box>
);

export default Header;