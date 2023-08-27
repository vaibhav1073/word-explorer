import { createSlice } from "@reduxjs/toolkit";

const legendSlice = createSlice({
  name: "legendSlice",
  initialState: {
    continents: "",
    populationDensity: 0,
    GdpPerCapita:0,
  },
  reducers: {
    setContinents: (state, action) => {
      state.continents = action.payload;
    },
    setPopulationDensity: (state, action) => {
      state.populationDensity = action.payload;
    },
    setGDPPerCapita:(state,action)=>{
      state.GdpPerCapita=action.payload;
    }
  },
});

export const { setContinents , setPopulationDensity , setGDPPerCapita } = legendSlice.actions;
export default legendSlice.reducer;
