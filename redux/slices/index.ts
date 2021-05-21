import { combineReducers, AnyAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import weathers from "./weathers";
import locationSlice from "./locationSlice";
import { IWeather } from "@interface/weather";
import { ICityname } from "@interface/cityname";

export interface State {
  weathers: IWeather;
  locationSlice: ICityname;
}

const rootReducer = (state: State | undefined, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      console.log("HYDRATE");
      return action.payload;

    default: {
      const combineReducer = combineReducers({
        weathers,
        locationSlice,
      });
      return combineReducer(state, action);
    }
  }
};
export default rootReducer;
