import { authActions } from "../store/auth";
import classes from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
	const dispatch = useDispatch();
	const authorized = useSelector(
		(state) => state.authenticator.isAuthenticated
	);
	const logInHandler = () => {
		dispatch(authActions.logIn());
	};
	const logoutHandler = () => {
		dispatch(authActions.logOut());
	};
	return (
		<header className={classes.header}>
			<h1>Redux Auth</h1>
			<nav>
				<ul>
					<li>
						<a href="/">My Products</a>
					</li>
					<li>
						<a href="/">My Sales</a>
					</li>
					<li>
						{authorized ? (
							<button onClick={logoutHandler}>Logout</button>
						) : (
							<button onClick={logInHandler}>login</button>
						)}
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
