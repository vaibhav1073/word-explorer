import React from "react";
import { Box, CircularProgress } from "@mui/material";
import { box1 } from "./loaderStyles";

const Loader = () => {
  return (
    <Box sx={box1}>
      <CircularProgress />
    </Box>
  );
};

export default Loader;
