import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IWeather } from "@interface/weather";
import axios from "axios";
const initialState: IWeather = {
  isLoggedIn: false,
};

export const getList = createAsyncThunk("GET_TODO", async () => {
  const response = await axios.get("");
  return response.data;
});

export const weathers = createSlice({
  name: "weathers",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      // builder의 addCase는 typescript의 타입 추론 사용할 때 편하다.
      .addDefaultCase(() => {}),
});

export default weathers.reducer;
