import { authActions } from "../store/auth";
import UserProfile from "./UserProfile";
import classes from "./Auth.module.css";
import { useSelector, useDispatch } from "react-redux";

const Auth = () => {
	const dispatch = useDispatch();

	const authorized = useSelector(
		(state) => state.authenticator.isAuthenticated
	);
	// const logoutHandler = () => {
	// 	dispatch(authActions.logOut);
	// };
	const logInHandler = (e) => {
		e.preventDefault();

		dispatch(authActions.logIn());
		console.log(authorized, "auth.js");
	};

	const logInForm = (
		<main className={classes.auth}>
			<section>
				<form onSubmit={logInHandler}>
					<div className={classes.control}>
						<label htmlFor="email">Email</label>
						<input type="email" id="email" />
					</div>
					<div className={classes.control}>
						<label htmlFor="password">Password</label>
						<input type="password" id="password" />
					</div>
					<button type="submit">Login</button>
				</form>
			</section>
		</main>
	);
	return <>{!authorized ? logInForm : <UserProfile />}</>;
};

export default Auth;
