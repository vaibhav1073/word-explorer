import { memo } from "react";
import { useSelector } from "react-redux";

import ContinentsLegend from "./legends/ContinentsLegend";
import PopulationDensityLegend from "./legends/PopulationDensityLegend";

import { Container } from "@mui/material";
import { containerStyle } from "./legendSyles";
import GDPLegend from "./legends/GDPLegend";

const Legend = ({ mode }) => {
  const regions = useSelector((state) => state.extremePoints?.regions);

  const displayLegend = (mode) => {
    if (mode === "Population_Density") return <PopulationDensityLegend />;
    else if(mode==='GDP_Per_Capita')return <GDPLegend />
    else return <ContinentsLegend regions={regions} />;
  };
  return <Container sx={containerStyle}>{displayLegend(mode)}</Container>;
};

export default memo(Legend);
