import { memo } from "react";
import { useGetcountryDataByNameQuery } from "../../../../services/slices/countrySlice";

import CardContainer from "./cardContainer/CardContainer";

import { Container, Skeleton } from "@mui/material";
import { containerStyle } from "./displayContentsStyles";

const DisplayContents = ({ countryName }) => {
  const { data, isLoading } = useGetcountryDataByNameQuery(countryName);

  return (
    <Container sx={containerStyle}>
      {isLoading && (
        <Skeleton variant="reactangle" width={"90%"} height={"100%"} />
      )}
      {data !== undefined && !isLoading ? (
        <CardContainer
          flags={data[0].flags}
          continents={data[0].continents}
          capital={data[0].capital}
          name={data[0].name}
          region={data[0].region}
          subregion={data[0].subregion}
          landlocked={data[0].landlocked}
          population={data[0].population}
          area={data[0].area}
          borders={data[0].borders}
          currencies={data[0].currencies}
          languages={data[0].languages}
          demonyms={data[0].demonyms}
        />
      ) : (
        <></>
      )}
    </Container>
  );
};
export default memo(DisplayContents);
