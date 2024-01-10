import React from "react";
import Counter from "./components/Counter";
import Auth from "./components/Auth";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";

function App() {
	return (
		<React.Fragment>
			<Header />
			<UserProfile />
			<Auth />
			<Counter />
		</React.Fragment>
	);
}

export default App;
