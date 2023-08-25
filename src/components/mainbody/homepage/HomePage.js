import {Fragment} from "react";
import { useGetAllCountriesDataQuery } from "../../../services/slices/countrySlice";
import { useSelector } from "react-redux";

import Loader from "../../loader/Loader";
import DisplayContents from "./displayContents/DisplayContents";
import SearchBar from "./searchBar/SearchBar";
import { TyperText } from "../typerText/TyperText";

import { Container, Toolbar } from "@mui/material";

export const HomePage = () => {
  const { data, isloading } = useGetAllCountriesDataQuery();
  const countryQuery = useSelector((state) => state.countries?.searchCountry);

  return (
    <Fragment>
      <Container sx={{ width: "100%" , }}>
        <Toolbar />
        {data !== undefined && !isloading ? (
          <Fragment>
            <TyperText />
            <SearchBar />
            {countryQuery ? (
              <DisplayContents countryName={countryQuery} />
            ) : (
              <></>
            )}
          </Fragment>
        ) : (
          <>
            <Loader />
          </>
        )}
      </Container>
    </Fragment>
  );
};
