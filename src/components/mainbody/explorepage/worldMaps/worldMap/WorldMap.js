import { memo } from "react";
import { useSelector } from "react-redux";

import Legend from "../Legend";

import { MapContainer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../worldMap/WorldMap.css";
import {
  colorScale,
  colorScalePopDensity,
  mapStyle,
} from "../../../../../utils/utilFunctions/worldMaputil";
import { Box } from "@mui/material";

const WorldMap = ({ countries, mode }) => {
  const minPopDen = useSelector(
    (state) => state.extremePoints?.minimumPopulationDensity
  );
  const maxPopDen = useSelector(
    (state) => state.extremePoints?.maximumPopulationDensity
  );

  const continents = useSelector((state) => state.legend?.continents);

  const reduxData = useSelector(
    (state) => state?.countries?.countriesData?.countryData
  );

  const popDensity = useSelector((state) => state.legend?.populationDensity);

  const eachCountry = (country, layer) => {
    const cca3 = country?.properties?.iso_a3;
    if (mode === "Continents") {
      const color = colorScale(country?.properties?.continent);
      layer.options.fillColor = continents
        ? continents === country?.properties?.continent
          ? color
          : "white"
        : colorScale(country?.properties?.continent);
      // layer.options.fillColor = colorScale(country?.properties?.continent);
      layer.options.weight = 0.1;
      layer.bindPopup(`${country.properties.continent}`);
    }
    if (mode === "Population_Density") {
      const pop = reduxData[cca3]?.population,
        area = reduxData[cca3]?.area;
      const density = pop / area ? pop / area : 0;
      if (popDensity <= density) {
        layer.options.fillColor = colorScalePopDensity(
          reduxData[cca3]?.population,
          reduxData[cca3]?.area,
          minPopDen,
          maxPopDen
        );
      }
      layer.bindPopup(
        `${country.properties?.admin} ${Math.round(density)} people per km sq`
      );
    }
  };

  return (
    <Box elevation={2}>
      <Legend mode={mode} />
      <MapContainer style={{ height: "70vh" }} zoom={2} center={[54, 15]}>
        <GeoJSON
          data={countries}
          key={`${mode}+${continents}+${popDensity}`}
          style={mapStyle}
          onEachFeature={eachCountry}
        />
      </MapContainer>
    </Box>
  );
};

export default memo(WorldMap);
