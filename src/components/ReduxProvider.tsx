"use client"
import { store } from "@/redux/store";
import { Provider } from "react-redux";

const ReduxProvider = ({ children }: T_layout) => {
	return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
