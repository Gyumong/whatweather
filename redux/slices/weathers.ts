// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { IWeather } from "@interface/weather";
// import { OPENWEATHER_API_KEY } from "../../config/config";

// import axios from "axios";
// const initialState: IWeather = {
//   isLoggedIn: false,
//   weathers: [],
// };

// export const getWeather = createAsyncThunk("GET_WEATHER", async () => {
//   const [lat, lon] = await getMyCurrentLocation();
//   try {
//     const response = await axios.get(
//       `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_API_KEY}`,
//     );
//     return response.data;
//   } catch (e) {
//     console.log(e);
//   }
// });

// export const weatherSlice = createSlice({
//   name: "weathers",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) =>
//     builder
//       // builder의 addCase는 typescript의 타입 추론 사용할 때 편하다.
//       .addCase(getWeather.fulfilled, (state, { payload }) => {
//         state.isLoggedIn = true;
//         state.weathers = payload;
//       }),
// });

// export default weatherSlice.reducer;
