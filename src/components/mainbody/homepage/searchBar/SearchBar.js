import React , { useEffect, useState, useRef,memo } from "react";
import { useSelector,useDispatch } from "react-redux";
import { editSearchCountry } from "../../../../services/slices/countrySlice";
import {
  Button,
  CircularProgress,
  Container,
  InputAdornment,
  TextField,
} from "@mui/material";
import { searchBarText } from "../../../../utils/constants/copyrightTexts";
import { searchCountry } from "../../../../utils/utilFunctions/searchFunctionCountry";
import SearchIcon from '@mui/icons-material/Search';
import { containerStyle1, containerStyle2, displayFlex } from "./searchBarStyles";

const SearchBar = () => {
  const dispatch=useDispatch()

  const [text, setText] = useState("");
  const [timeoutID, setTimeoutID] = useState(null);
  const [searchResult, setSearchResult] = useState([]);
  
  const searchResultsBoxRef = useRef(null);
  const inputBarRef = useRef(null);

  const countryNameArray = useSelector(
    (state) => state.countries?.countriesData?.countryNameArr
  );
  
  const handleSearchClick = (countryName) => {
    dispatch(editSearchCountry(countryName));
    setText("")
    setSearchResult([]);
    console.log("function trigger")
  };

  useEffect(() => {
    if (timeoutID) clearTimeout(timeoutID);
    setTimeoutID(
      setTimeout(() => {
        if(countryNameArray && text)setSearchResult(searchCountry(text, countryNameArray));
      }, 1000)
    );
  }, [text]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchResultsBoxRef &&
        !searchResultsBoxRef.current.contains(event.target) &&
        !inputBarRef.current.contains(event.target)
      ) {
        setSearchResult([]);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchResult]);

  return (
    <React.Fragment>
      <Container
        sx={{...displayFlex,...containerStyle1}}
      >
        <TextField
          label={searchBarText}
          variant="outlined"
          sx={{ width: "100%" }}
          value={text}
          onChange={(e) => {setText(e.target.value)}}
          ref={inputBarRef}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{color:"text.primary"}} />
              </InputAdornment>
            ),
          }}
        />

        <Container
          sx={{...displayFlex,...containerStyle2}}
          
          ref={searchResultsBoxRef}
        >
          {text !== "" && !searchResult ? (
            <h1>loading...</h1>
          ) : searchResult ? (
            searchResult.map((country) => (
              <Button
                sx={{ justifyContent: "flex-start" }}
                key={country.item}
                onClick={() => handleSearchClick(country.item)}
              >
                {country.item}
              </Button>
            ))
          ) : (
            <>
              <CircularProgress />
            </>
          )}
        </Container>
      
      </Container>
    </React.Fragment>
  );
}
export default memo(SearchBar);


