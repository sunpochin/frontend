import { useContext } from "react";
import AuthContext from "../../store/auth-context";

import { Link, useHistory } from "react-router-dom";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
	const authCtx = useContext(AuthContext);
	const isLoggedIn = authCtx.isLoggedIn;
	const history = useHistory();
	const logoutHandler = () => {
		authCtx.logout();
		history.replace('/');
	}

	return (
		<header className={classes.header}>
			<Link to="/">
				<div className={classes.logo}>React Auth</div>
			</Link>
			<nav>
				<ul>
					{!isLoggedIn ? (
						<li>
							<Link to="/auth">Login</Link>
						</li>
					) : null}
					{isLoggedIn ? (
						<li>
							<Link to="/profile">Profile</Link>
						</li>
					) : null}
					{isLoggedIn ? (
						<li>
							<button onClick={logoutHandler}>Logout</button>
						</li>
					) : null}
				</ul>
			</nav>
		</header>
	);
};

export default MainNavigation;
