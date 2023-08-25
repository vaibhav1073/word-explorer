import { createSlice } from "@reduxjs/toolkit";

const legendSlice = createSlice({
  name: "legendSlice",
  initialState: {
    continents: "",
    populationDensity: 0,
  },
  reducers: {
    setContinents: (state, action) => {
      state.continents = action.payload;
    },
    setPopulationDensity: (state, action) => {
      state.populationDensity = action.payload;
    },
  },
});

export const { setContinents , setPopulationDensity } = legendSlice.actions;
export default legendSlice.reducer;
