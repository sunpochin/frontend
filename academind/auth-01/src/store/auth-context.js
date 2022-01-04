import React, { useState, useEffect, useCallback } from "react";

let logoutTimer;

const AuthContext = React.createContext({
	token: "",
	isLoggedIn: false,
	login: (token) => {},
	logout: () => {},
});

const calculateRemainingTime = (expirationTime) => {
	const curTime = new Date().getTime();
	const adjExpirationTime = new Date(expirationTime).getTime();
	const remainingDuration = adjExpirationTime - curTime;
	return remainingDuration;
}

const retrieveStoredToken = () => {
	const storedToken = localStorage.getItem('token');
	const storedExpirationDate = localStorage.getItem('expirationTime');
	const remainingTime = calculateRemainingTime(storedExpirationDate);
	if (remainingTime <= 60000) {
		localStorage.removeItem('token');
		localStorage.removeItem('expirationTime');
		return null;
	}
	return {
		token: storedToken,
		duration: remainingTime
	};
};


export const AuthContextProvider = (props) => {
	// console.log('AuthContextProvider props: ', props);
	const tokenData = retrieveStoredToken();
	let initialToken;
	if (tokenData) {
		initialToken = tokenData.token;
	}
	const [token, setToken] = useState(initialToken);

	const userIsLoggedIn = !!token;

	const logoutHandler = useCallback( () => {
		console.log('logout handler');
		setToken(null);
		localStorage.removeItem('token');
		localStorage.removeItem('expirationTime');

		if (logoutTimer) {
			clearTimeout(logoutTimer);
		}
	}, []);

	const loginHandler = (token, expirationTime) => {
		console.log("setToken: ", token);
		setToken(token);
		localStorage.setItem('token', token);
		localStorage.setItem('expirationTime', expirationTime);

		const remainingTime = calculateRemainingTime(expirationTime);
		logoutTimer = setTimeout(logoutHandler, 3000);
	};
	
	useEffect(()=>{
		console.log('use effect!');
		if (tokenData){
			console.log('tokenData.duration: ', tokenData.duration);
			logoutTimer = setTimeout(logoutHandler, tokenData.duration);
		}
	})

	// useEffect(()=>{
	// 	if (tokenData){
	// 		console.log('tokenData.duration: ', tokenData.duration);
	// 		logoutTimer = setTimeout(logoutHandler, tokenData.duration);
	// 	}
	// }, [tokenData, logoutHandler])

	const contextValue = {
		token: token,
		isLoggedIn: userIsLoggedIn,
		login: loginHandler,
		logout: logoutHandler,
	};

	return (
		<AuthContext.Provider value={contextValue}>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
