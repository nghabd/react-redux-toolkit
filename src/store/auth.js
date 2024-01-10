import { createSlice } from "@reduxjs/toolkit";
const authState = {
	isAuthenticated: false,
};

const authSlicer = createSlice({
	name: "authenticate",
	initialState: authState,
	reducers: {
		logIn(state) {
			state.isAuthenticated = true;
		},
		logOut(state) {
			state.isAuthenticated = false;
		},
	},
});

export const authActions = authSlicer.actions;

export default authSlicer.reducer;
