import { configureStore } from "@reduxjs/toolkit";
import rocketsReducer from "./rockets/rocketSlice";
import missionsReducer from "./missions/missionSlice";

const store = configureStore({
    reducer: {
        rockets: rocketsReducer,
        missions: missionsReducer
    }

})

export default store