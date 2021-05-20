import { configureStore, getDefaultMiddleware, EnhancedStore } from "@reduxjs/toolkit";
import { createWrapper, MakeStore } from "next-redux-wrapper";
import slice from "./slices";

const devMode = process.env.NODE_ENV === "development";

const store = configureStore({
  reducer: slice,
  middleware: [...getDefaultMiddleware()],
  devTools: devMode,
});

const setupStore = (context: any): EnhancedStore => store;

const makeStore: MakeStore = (context) => setupStore(context);

export const wrapper = createWrapper(makeStore, {
  debug: devMode,
});

// 21.03.31 추가
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default wrapper;
