import { lazy, memo, useState, Suspense } from "react";
import { useGetAllCountriesDataQuery } from "../../../services/slices/countrySlice";
import { useSelector } from "react-redux";
import {
  Box,
  Container,
  Skeleton,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import { box1, mainContainer, typographyStyle} from "./exploreHomeStyles";
import { exploreHeading } from "../../../utils/constants/copyrightTexts";

const LazyWorldMapContainer = lazy(() =>
  import("./worldMaps/WorldMapContainer")
);

const ExploreHome = () => {
  const countryData = useSelector((state) => state.countries.countriesData);
  let status = countryData ? false : true;

  useGetAllCountriesDataQuery({ status });

  const [activeTab, setActiveTab] = useState(0);
  const handleChange = (_, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Container sx={mainContainer}>
      <Toolbar />
      <Typography variant="h2" sx={typographyStyle}>
        {exploreHeading}
      </Typography>
      <Box sx={box1}>
        <Toolbar>
          <Tabs
            value={activeTab}
            textColor="inherit"
            centered
            scrollButtons={true}
            indicatorColor="secondary"
            onChange={handleChange}
            variant="fullWidth"
          >
            <Tab label="Continents" value={0} />
            <Tab label="Population Density" value={1} />
            <Tab label="GDP per Capita" value={2} />
          </Tabs>
        </Toolbar>
      </Box>
      <Suspense
        fallback={
          <Skeleton variant="rectangle" height={"70vh"} width={"90vw"} />
        }
      >
        <LazyWorldMapContainer mapValue={activeTab} />
      </Suspense>
    </Container>
  );
};

export default memo(ExploreHome);
//will also set the heading based on the value selected on the tab also
