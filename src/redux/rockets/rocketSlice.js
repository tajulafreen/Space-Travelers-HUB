import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  status: 'idle',
  error: null,
  loading: false,
  loaded: false
};

export const fetchRockets = createAsyncThunk('rockets/fetchData', async () => {
  try {
    const response = await axios.get('https://api.spacexdata.com/v3/rockets');
    const rocketsData = response.data.map((rocket) => ({
      id: rocket.id,
      name: rocket.rocket_name,
      type: rocket.rocket_type,
      flickr_images: rocket.flickr_images[0],
      description: rocket.description,
      reserved: false,
    }));

    return rocketsData;
  } catch (error) {
    throw new Error('Unable to fetch data for the rockets');
  }
});

export const cancelReservation = createAsyncThunk('rockets/cancelReservation', async (rocketId, { getState }) => {
  const state = getState();
  const newState = state.rockets.data.map((rocket) => {
    if (rocket.id !== rocketId) return rocket;
    return { ...rocket, reserved: false };
  });
  return newState;
});

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    bookRocket: (state, action) => {
      const bookRocket = state.data.map((rocket) => {
        if (rocket.id === action.payload) {
          return { ...rocket, reserved: true }
        } else {
          return { ...rocket }
        }
      });
      state.data = bookRocket
    },
    cancelBooking: (state, action) => {
      console.log(action.payload);
      const bookRocket = state.data.map((rocket) => {
        if (rocket.id === action.payload) {
          return { ...rocket, reserved: false }
        } else {
          return { ...rocket }
        }
      });
      state.data = bookRocket
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRockets.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loaded = true;
      })
      .addCase(fetchRockets.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(cancelReservation.fulfilled, (state, action) => {
        state.data = action.payload;
      });
  },
});

export default rocketsSlice.reducer;
export const { bookRocket, cancelBooking } = rocketsSlice.actions;