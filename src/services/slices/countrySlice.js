import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, queryUrl } from "../../utils/constants/baseUrl";
import { transformCountriesdata } from "../../utils/utilFunctions/transformCountriesData";

export const countriesApi = createApi({
  reducerPath: "countriesApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getAllCountriesData: builder.query({
      query: () => queryUrl,
      transformResponse: (data) => {
        // console.log(data)
        const transformedData = transformCountriesdata(data);
        return transformedData;
      },
    
    }),
    getcountryDataByName: builder.query({
      query: (countryName) => `/name/${countryName}?fullText=true`,
    }),
  }),
});

const countriesSlice = createSlice({
  name: "countriesSlice",
  initialState: {
    countriesData: null,
    countryData: null,
    searchCountry: "",
  },
  reducers: {
    addCountriesData: (state, action) => {
      state.countriesData = action.payload;
    },
    editSearchCountry: (state, action) => {
      state.searchCountry = action.payload;
    },
    
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        countriesApi.endpoints.getAllCountriesData.matchFulfilled,
        (state, action) => {
          state.countriesData = action.payload;
        }
      )
      .addMatcher(
        countriesApi.endpoints.getcountryDataByName.matchFulfilled,
        (state, action) => {
          state.countryData = action.payload;
        }
      );
  },
});
export const { useGetAllCountriesDataQuery, useGetcountryDataByNameQuery } =
  countriesApi;
export const { addCountriesData, editSearchCountry} =
  countriesSlice.actions;
export default countriesSlice.reducer;

// builder.addMatcher(countriesApi.endpoints.getcountryDataByName.matchFulfilled,(state,action)=>{
//     state.countryData=action.payload })
