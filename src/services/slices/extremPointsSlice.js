import { createSlice } from "@reduxjs/toolkit";

const extremePointsSlice=createSlice({
    name:"extremePointsSlice",
    initialState:{
        maximumPopulationDensity:null,
        minimumPopulationDensity:null,
        regions:[]
    },
    reducers:{
        setExtremePoints:(state,action)=>{
            const [minPopD,maxPopD,regions]=action.payload;
            
            state.maximumPopulationDensity=maxPopD;
            state.minimumPopulationDensity=minPopD;
            state.regions=[...regions];
        }
    },
})

export const {setExtremePoints} = extremePointsSlice.actions
export default extremePointsSlice.reducer