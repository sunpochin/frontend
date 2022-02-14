import React, { useEffect, useState, useCallback } from "react";

let logoutTimer;

export const useAuth = () => {
	const [token, setToken] = useState(false);
	const [tokenExpirationDate, setTokenExpirationDate] = useState();
	const [userId, setUserId] = useState(false);

	const login = useCallback((uid, token, expirationDate) => {
		console.log("got token: ", token, ", uid: ", uid);
		setToken(token);
		setUserId(uid);
		// const updatedExpiration =
		// 	expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
		const updatedExpiration =
			expirationDate || new Date(new Date().getTime() + 1000 * 3);
		setTokenExpirationDate(updatedExpiration);
		localStorage.setItem(
			"userData",
			JSON.stringify({
				userId: uid,
				token: token,
				expiration: updatedExpiration.toISOString(),
			})
		);
	}, []);

	const logout = useCallback(() => {
		setToken(null);
		setTokenExpirationDate(null);
		setUserId(null);
		localStorage.removeItem("userData");
	}, []);

	useEffect(() => {
		if (token && tokenExpirationDate) {
			const remainTime = tokenExpirationDate.getTime() - new Date().getTime();
			console.log("remainTime ", remainTime);
			logoutTimer = setTimeout(logout, remainTime);
		} else {
			console.log("useEffect logout ", token, tokenExpirationDate);
			// no token and no expirationDate, maybe
			// 1. user manually logout.
			// 2. timeout called logout,
			clearTimeout(logoutTimer);
		}
	}, [token, logout, tokenExpirationDate]);

	useEffect(() => {
		const storedData = JSON.parse(localStorage.getItem("userData"));
		if (
			storedData &&
			storedData.token &&
			new Date(storedData.expiration) > new Date()
		) {
			login(
				storedData.userId,
				storedData.token,
				new Date(storedData.expiration)
			);
		}
	}, [login]);
	return { token, login, logout, userId };
};
