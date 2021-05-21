import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICityname } from "@interface/cityname";

interface CityNamePayload {
  cityname: string;
}
const initialState: ICityname = {
  cityname: "",
};

export const locationSlice = createSlice({
  name: "cityname",
  initialState,
  reducers: {
    addCityName(state, action: PayloadAction<CityNamePayload>) {
      const { cityname } = action.payload;
      state.cityname = cityname;
    },
  },
});

export const { addCityName } = locationSlice.actions;
export default locationSlice.reducer;
