import blogReducer from "./slices/blogSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
	reducer: {
		blog: blogReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
