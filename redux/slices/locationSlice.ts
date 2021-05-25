import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import geolocation from "./../../utils/geolocation";

interface locationInitialState {
  userLocation: any[];
  isFetching: boolean;
  isSuccess: boolean;
  isError: boolean;
  errorMessage: string;
}
const initialState: locationInitialState = {
  userLocation: [],
  isFetching: false,
  isSuccess: false,
  isError: false,
  errorMessage: "",
};

export const getUserLocation = createAsyncThunk("data/getUserLocation", async (_, thunkAPI) => {
  try {
    const position = await geolocation();
    return { data: position };
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data);
  }
});
export const locationSlice = createSlice({
  name: "getlocation",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserLocation.fulfilled, (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;
      state.userLocation = payload.data;
    }),
      builder.addCase(getUserLocation.pending, (state) => {
        state.isFetching = true;
      }),
      builder.addCase(getUserLocation.rejected, (state, { payload }) => {
        state.isFetching = false;
        state.isError = true;
        state.errorMessage = payload.message;
      });
  },
});

// export const { clearState } = locationSlice.actions;
export default locationSlice.reducer;
