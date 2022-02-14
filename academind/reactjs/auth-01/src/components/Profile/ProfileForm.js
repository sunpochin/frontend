import { useRef, useContext } from "react";
import classes from "./ProfileForm.module.css";
import AuthContext from "../../store/auth-context";
import {useHistory} from "react-router";

const ProfileForm = () => {
	const history = useHistory();

	const newPasswordInputRef = useRef();
	const authCtx = useContext(AuthContext);
  console.log("authCtx: ", authCtx );

	const submitHandler = (event) => {
		event.preventDefault();
		const enteredNewPassword = newPasswordInputRef.current.value;

		//
    const jsonStr = JSON.stringify({
      idToken: authCtx.token,
      password: enteredNewPassword,
      returnSecureToken: false,
    });
    console.log("authCtx.idToken: ", authCtx.token, ",jsonStr: ", jsonStr);
		let url =
			"https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBeFEWjbh0x8ZSTb5K0APkmP6TYOoR75lk";
		fetch(url, {
			method: "POST",
			body: JSON.stringify({
				idToken: authCtx.token,
				password: enteredNewPassword,
				returnSecureToken: false,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		}).then((res) => {
      // asssumption: always succeeds!
			console.log("ProfileForm res: ", res);
      history.replace('/');
		});
	};

	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<div className={classes.control}>
				<label htmlFor="new-password">New Password</label>
				<input
					type="password"
					id="new-password"
					minLength="7"
					ref={newPasswordInputRef}
				/>
			</div>
			<div className={classes.action}>
				<button>Change Password</button>
			</div>
		</form>
	);
};

export default ProfileForm;
