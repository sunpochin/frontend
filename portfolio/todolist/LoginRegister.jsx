import React, {useEffect } from "react";
import {Switch, Route} from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";

function LoginRegister() {
	function refreshList() {
		console.log("entry: ");
	}

	useEffect(() => {
		refreshList();
	}, []);

	return (
			<div className="outer">
				<div className="inner">
					<Switch>
						<Route exact path="/" component={Login} />
						<Route path="/sign-in" component={Login} />
						<Route path="/sign-up" component={SignUp} />
						<Route path="/logout" component={SignUp} />
					</Switch>
				</div>
			</div>
	);
}

export default LoginRegister;
