import { NavLink } from 'react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom';
import classes from './MainHeader.module.css';

const MainHeader = () => {
	return (
		<header className={classes.header}>
			<nav>
				<ul>
					<li>
						<NavLink activeClassName={classes.haha} to='/welcome'>
							Welcome
						</NavLink>
					</li>
					<li>
						<NavLink activeClassName={classes.haha} to='/products'>
							Products
						</NavLink>
					</li>
					{/* <li>
						<Link to='/welcome'>Welcome</Link>
					</li>
					<li>
						<Link to='/products'>Products</Link>
					</li> */}
				</ul>
			</nav>
		</header>
	);
};

export default MainHeader;
