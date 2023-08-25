import { memo } from "react";
import { useSelector } from "react-redux";

import ContinentsLegend from "./legends/ContinentsLegend";
import PopulationDensityLegend from "./legends/PopulationDensityLegend";

import { Container } from "@mui/material";
import { containerStyle } from "./legendSyles";

const Legend = ({ mode }) => {
  const regions = useSelector((state) => state.extremePoints?.regions);

  const displayLegend = (mode) => {
    if (mode === "Population_Density") return <PopulationDensityLegend />;
    else return <ContinentsLegend regions={regions} />;
  };
  return <Container sx={containerStyle}>{displayLegend(mode)}</Container>;
};

export default memo(Legend);
