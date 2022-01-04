import { useState, useRef, useContext, } from "react";

import classes from "./AuthForm.module.css";
import AuthContext from "../../store/auth-context";
import { useHistory } from "react-router";

const AuthForm = () => {
	const history = useHistory();
	const emailInputRef = useRef();
	const passwordInputRef = useRef();
	const authCtx = useContext(AuthContext);
	const [isLogin, setIsLogin] = useState(true);
	const [isLoading, setIsLoading] = useState(false);

	const switchAuthModeHandler = () => {
		setIsLogin((prevState) => !prevState);
	};

	const submitHandler = (event) => {
		event.preventDefault();
		const enteredEmail = emailInputRef.current.value;
		const enteredPassword = passwordInputRef.current.value;
		let url = "";
		if (isLogin) {
			url =
				"https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBeFEWjbh0x8ZSTb5K0APkmP6TYOoR75lk";
		} else {
			url =
				"https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBeFEWjbh0x8ZSTb5K0APkmP6TYOoR75lk";
		}
		fetch(url, {
			method: "POST",
			body: JSON.stringify({
				email: enteredEmail,
				password: enteredPassword,
				returnSecureToken: true,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => {
        console.log("res: ", res);
				setIsLoading(false);
				if (res.ok) {
          console.log("res: ", res);
          let test = res.json()
          console.log("res.ok res.json(): ", test);
					return test;
				} else {
					return res.json().then((data) => {
						console.log("err: ", data);
						let errorMsg = "Auth failed";
						if (data && data.error && data.error.message) {
							errorMsg = data.error.message;
						}
						throw new Error(errorMsg);
					});
				}
			})
			.then((aa) => {
        console.log(" test aa: ", aa);
        console.log(" test aa: ", aa.email);
        console.log(" test aa: ", aa.idToken);
        // alert('aa.idToken: ' + aa.email);
				const expireTime = new Date(new Date().getTime() + (+aa.expiresIn * 1000));
				authCtx.login(aa.idToken, expireTime.toISOString() );
				history.replace('/');

      })
			.catch((err) => {
        console.log("fetch err: ", err);
        alert(err);
      });
    };

	return (
		<section className={classes.auth}>
			<h1>{isLogin ? "Login" : "Sign Up"}</h1>
			<form onSubmit={submitHandler}>
				<div className={classes.control}>
					<label htmlFor="email">Your Email</label>
					<input type="email" id="email" required ref={emailInputRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor="password">Your Password</label>
					<input
						type="password"
						id="password"
						required
						ref={passwordInputRef}
					/>
				</div>
				<div className={classes.actions}>
					{!isLoading ? (
						<button>{isLogin ? "Login" : "Create Account"}</button>
					) : null}
					{isLoading ? <p>Loading...</p> : null}

					<button
						type="button"
						className={classes.toggle}
						onClick={switchAuthModeHandler}
					>
						{isLogin ? "Create new account" : "Login with existing account"}
					</button>
				</div>
			</form>
		</section>
	);
};

export default AuthForm;
