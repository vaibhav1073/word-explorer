import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPopulationDensity } from "../../../../../services/slices/legendSlice";
import { Container, Slider, Typography } from "@mui/material";

const PopulationDensityLegend = () => {
  const dispatch = useDispatch();
  
  const minPopDen = useSelector(
    (state) => state.extremePoints?.minimumPopulationDensity
  );
  const maxPopDen = useSelector(
    (state) => state.extremePoints?.maximumPopulationDensity
  );

  const [value, setValue] = useState(0);
  const handleChange = (_, newValue) => {
    const rounded = Math.round(newValue);
    dispatch(setPopulationDensity(rounded));
    setValue(rounded);
  };

  const diff = (maxPopDen - minPopDen) / 100;

  return (
    <Container>
      <Slider
        aria-label="Always visible"
        getAriaLabel={() => "Temperature range"}
        defaultValue={0}
        step={diff / 10}
        max={maxPopDen / 100}
        min={minPopDen / 100}
        valueLabelDisplay="on"
        value={value}
        onChange={handleChange}
      />

      <Typography variant="h5">
        {value === 0 ? (
          "showing all countries"
        ) : (
          <span>
            Showing countries with {value} or more people per km
            <sup>2</sup>
          </span>
        )}
      </Typography>
    </Container>
  );
};

export default PopulationDensityLegend;
