import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import { baseCountryUrl } from "../../utils/constants/baseUrl";

export const singleCountryApi = createApi({
  reducerPath: "singleCountryApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseCountryUrl }),
  endpoints: (builder) => ({
    getSingleCountryByName: builder.query({
      query: (name) => `${name}?fullText=true`,
    }),
  }),
});

const singleCountrySlice=createSlice({
    name:"singleCountrySlice",
    initialState:{
     singleCountryData:null,
    },
    reducers:{
     addSingleCountryData:(state,action)=>{
         state.singleCountryData=action.payload;
     }
    },
    extraReducers:(builder)=>{
     builder.addMatcher(singleCountryApi.endpoints.getSingleCountryByName.matchFulfilled,(state,action)=>{
         state.singleCountryData=action.payload })
    }
 })

export const { useGetSingleCountryByNameQuery } = singleCountryApi;
export const {addSingleCountryData}=singleCountrySlice.actions;
export default singleCountrySlice.reducer