import { createSlice } from "@reduxjs/toolkit";
import { IWeather } from "@interface/weather";

const initialState: IWeather = {
  isLoggedIn: false,
};

export const weathers = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      // builder의 addCase는 typescript의 타입 추론 사용할 때 편하다.
      .addDefaultCase(() => {}),
});

export default weathers.reducer;
