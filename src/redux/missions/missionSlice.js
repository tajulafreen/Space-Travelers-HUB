import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    missions: [],
    loading: true,
    error: false,
    loaded: false,
};

export const fetchMissionThunk = createAsyncThunk('fetch/mission', async () => {
    const request = await axios.get("https://api.spacexdata.com/v3/missions");
    return request.data.map((rocket) => ({
        ...rocket,
        joined: false,
    }));
})

const missionsSlice = createSlice({
    name: "missionSlice",
    initialState,
    reducers: {
        joinMission: (state, action) => {
            const join = state.missions.map((mission) => (
                { ...mission, joined: action.payload === mission.mission_id ? true : mission.joined }
            ));
            state.missions = join;
        },
        cancelMission: (state, action) => {
            const join = state.missions.map((mission) => (
                { ...mission, joined: action.payload === mission.mission_id ? false : mission.joined }
            ));
            state.missions = join;
        }
    },

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
            state.missions = action.payload;
            state.loaded = true;
        })
    }
});

export default missionsSlice.reducer;
export const missionSelector = (state) => state.missions;
export const { joinMission, cancelMission } = missionsSlice.actions

