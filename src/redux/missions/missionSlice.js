import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    missions: [],
    loading: true,
    error: false,
};

const missionsSlice = createSlice({
    name:"missionSlice",
    initialState,
    reducers: {
        getMissions: (state, action) => {
            state.missions = action.payload;
            state.loading = false;
        },
    },
});

export const { getMissions, getMissionsFailure } = missionsSlice.actions;
export default missionsSlice.reducer;