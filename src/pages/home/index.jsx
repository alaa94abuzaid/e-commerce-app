import React from "react";
import Box from "@mui/material/Box";

import { Footer, Layout, Products } from "../../components";

export const Home = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          marginTop: "64px",
          marginBottom: "50px",
          overflow: "hidden",
        }}
      >
        <Layout />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Products />
        </Box>
      </Box>
      <Footer />
    </>
  );
};
