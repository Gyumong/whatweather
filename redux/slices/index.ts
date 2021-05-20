import { combineReducers, AnyAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import weathers from "./weathers";
import { IWeather } from "../../interface/weather";

export interface State {
  weathers: IWeather;
}

const rootReducer = (state: State | undefined, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      console.log("HYDRATE");
      return action.payload;

    default: {
      const combineReducer = combineReducers({
        weathers,
      });
      return combineReducer(state, action);
    }
  }
};
export default rootReducer;
