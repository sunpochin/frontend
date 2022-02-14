import classes from './Header.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store/auth-slice';

const Header = () => {
	const dispatch = useDispatch();

	const loggedin = useSelector((state) => state.auth.isAuthenticated);
	const logout = () => {
		dispatch(authActions.logout());
	};

	const content = (
		<>
			{loggedin && (
				<ul>
					<li>
						<a href='/'>My Products</a>
					</li>
					<li>
						<a href='/'>My Sales</a>
					</li>
					<li>
						<button onClick={logout}>Logout</button>
					</li>
				</ul>
			)}
		</>
	);
	return (
		<header className={classes.header}>
			<h1>Redux Auth</h1>
			<nav>{content}</nav>
		</header>
	);
};

export default Header;
