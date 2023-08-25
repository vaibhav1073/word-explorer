import { useState, memo } from "react";
import { useSelector } from "react-redux";
import { formatNumber } from "../../../../../utils/utilFunctions/formatNumber";

import {
  processDemonym,
  processBorders,
} from "../../../../../utils/constants/countryDataTransform";

import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import {
  boxStyle,
  cardMediaStyle,
  cardStyle,
  expandButtonStyle,
} from "./cardContainerStyles";

const CardContainer = memo(
  ({
    flags,
    continents,
    capital,
    name,
    region,
    subregion,
    landlocked,
    borders,
    area,
    population,
    demonyms,
  }) => {
    const [show, setShow] = useState(true);
    const [country, setCountry] = useState(name.common);
    const countryData = useSelector(
      (state) => state.countries?.countriesData?.countryData
    );

    const processBorderNation = (borders) => {
      if (borders === undefined) return processBorders(borders, name.common);
      let bordersNations = [];
      borders.forEach((border) =>
        bordersNations.push(countryData[border].name.common)
      );

      return processBorders(bordersNations, name.common);
    };
    if (country !== name.common) {
      setCountry(name.common);
      setShow(true);
    }

    const changeShow = () => setShow((p) => !p);
    return (
      <Card sx={cardStyle} variant="outlined">
        {show ? (
          <ExpandLessIcon sx={expandButtonStyle} onClick={changeShow} />
        ) : (
          <ExpandMoreIcon sx={expandButtonStyle} onClick={changeShow} />
        )}
        {show ? (
          <Box sx={boxStyle}>
            <CardMedia
              component="img"
              image={flags.png}
              alt={flags.alt ? flags.alt : "country flag"}
              sx={cardMediaStyle}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {name.common}
              </Typography>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{ fontFamily: "cursive" }}
              >
                Official name : {name.official}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {name.common}, officially {name.official} is a{" "}
                {landlocked ? "landlocked" : ""} country located in the region
                of {subregion},{region}. With a population of approximately{" "}
                {formatNumber(population)} {name.official} has an area of about{" "}
                {formatNumber(area)} km<sup>2</sup>
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
                {name.common} has capital{capital.length > 1 ? "s" : ""}{" "}
                {capital[0]}. With a population density of{" "}
                {formatNumber(population / area)} people per km<sup>2</sup>.{" "}
                {processDemonym(demonyms, name.common)}.
                {processBorderNation(borders)}
              </Typography>
            </CardContent>
          </Box>
        ) : (
          <></>
        )}
      </Card>
    );
  }
);

//flags: obj: png,svg,continents:array,capital:array landlocked:boolean,region, subredion are obj ,
// name=> {common,official}
//borders=array of only cca codes
//area is simply area number

// !! can fetch even more data from api ninjas.
export default CardContainer;
