import { createSlice } from "@reduxjs/toolkit";

const counterState = {
	counter: 0,
	showCounter: false,
};

const counterSlicer = createSlice({
	name: "counter",
	initialState: counterState,
	reducers: {
		increment(state) {
			state.counter++;
		},
		decrement(state) {
			state.counter--;
		},
		increase(state, action) {
			state.counter = state.counter + action.payload;
		},
		toggleCounter(state) {
			state.showCounter = !state.showCounter;
		},
	},
});

export const counterActions = counterSlicer.actions;

export default counterSlicer.reducer;
