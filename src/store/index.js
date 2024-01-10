// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import counterRedcucer from "./counter";
import authRedcucer from "./auth";

// const counterReducer = (state = initialState, action) => {
// 	if (action.type === "INCREMENT") {
// 		return {
// 			counter: state.counter + 1,
// 			showCounter: state.showCounter,
// 		};
// 	}
// 	if (action.type === "INCREASEFIVE") {
// 		return {
// 			counter: state.counter + action.amount,
// 			showCounter: state.showCounter,
// 		};
// 	}
// 	if (action.type === "DECREMENT") {
// 		return {
// 			counter: state.counter - 1,
// 			showCounter: state.showCounter,
// 		};
// 	}
// 	if ((action.type = "TOGGLE")) {
// 		return {
// 			counter: state.counter,
// 			showCounter: !state.showCounter,
// 		};
// 	}
// 	return state;
// };

const store = configureStore({
	reducer: {
		counter: counterRedcucer,
		authenticator: authRedcucer,
	},
});

export default store;
