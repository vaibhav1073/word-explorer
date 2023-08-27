import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setGDPPerCapita} from "../../../../../services/slices/legendSlice";
import { Container, Slider, Typography } from "@mui/material";

const GDPLegend = () => {
  const dispatch = useDispatch();
  const currentGDP=useSelector(state=>state?.legend?.GdpPerCapita)
  const [value, setValue] = useState(0);
  const handleChange = (_, newValue) => {
    const rounded = Math.round(newValue);
    dispatch(setGDPPerCapita(rounded));
    setValue(rounded);
  };

  return (
    <Container>
      <Slider
        aria-label="Always visible"
        getAriaLabel={() => "Temperature range"}
        defaultValue={0}
        step={1000}
        max={60000}
        min={0}
        valueLabelDisplay="on"
        value={currentGDP}
        onChange={handleChange}
      />

      <Typography variant="h5">
        {value === 0 ? (
          "showing all countries"
        ) : (
          <>
            Showing countries GDP per Capita greater than or equal to ${value}
          </>
        )}
      </Typography>
    </Container>
  );
};

export default GDPLegend;
