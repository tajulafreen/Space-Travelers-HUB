import { configureStore } from "@reduxjs/toolkit";
import rockets from "./rockets/rocketSlice";
import missionsReducer from "./missions/missionSlice";

const store = configureStore({
    reducer: {
        rockets: rockets,
        missions: missionsReducer
    }

})

export default store