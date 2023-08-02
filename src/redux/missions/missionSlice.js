import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    missions: [],
    loading: true,
    error: false,
};

export const fetchMissionThunk = createAsyncThunk('fetch/mission', async () => {
    const request = await axios.get("https://api.spacexdata.com/v3/missions");
    console.log(request.data, 'request');
    return request.data;
})

const missionsSlice = createSlice({
    name: "missionSlice",
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(fetchMissionThunk.pending, (state) => {
            state.loading = true;
        })

        builder.addCase(fetchMissionThunk.rejected, (state) => {
            state.loading = false;
            state.error = true;
        })

        builder.addCase(fetchMissionThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.missions = action.payload
        })
    }
});

export default missionsSlice.reducer;
export const missionSelector = (state) => state.missions;
