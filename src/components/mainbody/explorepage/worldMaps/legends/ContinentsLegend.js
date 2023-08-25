import { useState } from "react";
import { useDispatch } from "react-redux";
import { setContinents } from "../../../../../services/slices/legendSlice";
// import { colorScale } from "../../../../../utils/utilFunctions/worldMaputil";
import { FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";

const ContinentsLegend = ({ regions }) => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState('');
  const handleClick = (region) => {
    dispatch(setContinents(region));
    setSelected(region);
  };
  return (
    <>
     
        
        <FormControl fullWidth>
          
          <InputLabel id="demo-simple-select-label">Select Continent</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selected}
            label="Select Continent"
            onChange={(e)=>handleClick(e.target.value)}
          >
            {
              regions.map(region=>(
               region==="Antarctica"? <MenuItem value="" key="all">All</MenuItem> : <MenuItem  key={region} value={region}>{region}</MenuItem>
              ))
            }
          </Select>
        </FormControl>
      

      <Typography variant="h6">
        {selected
          ? `Showing countries in ${selected} `
          : "Showing all continents"}
      </Typography>
    </>
  );
};

export default ContinentsLegend;



  // <Grid container spacing={2} sx={{ mt: 2 }}>
  //   {regions.map((region) => {
  //     const styles = {
  //       backgroundColor: "#0476c1;",
  //       textAlign: "center",
  //       justifyContents: "center",
  //       alingItems: "center",
  //       cursor: "pointer",
  //       transition: "background-color 0.3s",
  //       "&:hover": {
  //         backgroundColor: colorScale(region),
  //       },
  //     };
  //     return (
  //       <Grid
  //         item
  //         xs={4}
  //         sm={4}
  //         md={2}
  //         value={region}
  //         key={region}
  //         sx={styles}
  //         component="div"
  //         onClick={() => {
  //           handleClick(region);
  //         }}
  //       >
  //         {region}
  //       </Grid>
  //     );
  //   })}
  // </Grid>