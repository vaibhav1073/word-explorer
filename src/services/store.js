import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import countrySlice, { countriesApi } from "./slices/countrySlice";
import extremPointsSlice from "./slices/extremPointsSlice";
import legendSlice from "./slices/legendSlice";
import quizSlice from "./slices/quizSlice";


export const store = configureStore({
  reducer: {
    countries: countrySlice,
    [countriesApi.reducerPath]: countriesApi.reducer,
    extremePoints:extremPointsSlice,
    legend:legendSlice,
    quiz:quizSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(countriesApi.middleware)
   
});

setupListeners(store.dispatch);
export default store;
