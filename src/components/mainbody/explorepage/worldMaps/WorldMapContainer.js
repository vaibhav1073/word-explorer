import { memo, useState, useEffect, lazy, Suspense } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setExtremePoints } from "../../../../services/slices/extremPointsSlice";

import Loader from "../../../loader/Loader";

import worldMapData from "../../../assests/worldmap.json";
import {
  findExtremePoints,
  findMode,
} from "../../../../utils/utilFunctions/worldMaputil";

import { Container, Skeleton } from "@mui/material";

const WorldMap = lazy(() => import("./worldMap/WorldMap"));

const WorldMapContainer = ({ mapValue }) => {
  const dispatch = useDispatch();
  const countriesData = useSelector((state) => state.countries?.countriesData);

  const [countries, setCountries] = useState([]);
  const loadData = () => {
    setCountries(worldMapData?.features);

    const extremePoints = findExtremePoints(countriesData);

    if (extremePoints) dispatch(setExtremePoints(extremePoints));
  };

  useEffect(() => loadData(), [countriesData]);

  return (
    <Container>
      {countries.length === 0 ? (
        <Skeleton variant="rectangle" width={"100%"} height={"70vh"} />
      ) : (
        <Suspense fallback={<Loader />}>
          <WorldMap countries={countries} mode={findMode(mapValue)} />
        </Suspense>
      )}
    </Container>
  );
};

export default memo(WorldMapContainer);
