import React from "react";
import Box from "@mui/material/Box";

import { CartTable, Footer, Layout } from "../../components";

export const Cart = () => (
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
      <Box component="main" sx={{ flexGrow: 1, p: 3, overflow: "scroll" }}>
        <CartTable />
      </Box>
    </Box>
    <Footer />
  </>
);
