import React, { useState, useEffect, useReducer, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';

const emailReducer = (state, action) => {
	if (action.type === 'USER_INPUT') {
		return { value: action.val, isValid: action.val.includes('@') };
	}
	if (action.type === 'INPUT_BLUR') {
		return { value: state.value, isValid: state.value.includes('@') };
	}
	return { value: '', isValid: false };
};

const passwordReducer = (state, action) => {
	if (action.type === 'USER_INPUT') {
		return { value: action.val, isValid: action.val.trim().length > 6 };
	}
	if (action.type === 'INPUT_BLUR') {
		return { value: state.value, isValid: state.value.trim().length > 6 };
	}
	return { value: '', isValid: false };
};

const Login = (props) => {
	//	const [enteredEmail, setEnteredEmail] = useState('');
	//	const [emailIsValid, setEmailIsValid] = useState();
	// const [enteredPassword, setEnteredPassword] = useState('');
	// const [passwordIsValid, setPasswordIsValid] = useState();
	const [formIsValid, setFormIsValid] = useState(false);

	const [emailState, dispatchEmail] = useReducer(emailReducer, {
		value: '',
		isValid: false,
	});
	const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
		value: '',
		isValid: false,
	});

	useEffect(() => {
		console.log('EFFECT RUNNING');

		return () => {
			console.log('EFFECT CLEANUP');
		};
	}, []);

  // alias assignment
  const {isValid: emailIsValid} = emailState;
  const {isValid: passwordIsValid} = passwordState;

	const emailInputRef = useRef();
	const passwordInputRef = useRef();

	useEffect(() => {
	  const identifier = setTimeout(() => {
	    console.log('Checking form validity!');
	    // setFormIsValid(
	    //   enteredEmail.includes('@') && enteredPassword.trim().length > 6
	    // );
      setFormIsValid(
        emailIsValid && passwordIsValid
      );
	  }, 500);

	  return () => {
	    console.log('CLEANUP');
	    clearTimeout(identifier);
	  };
	}, [emailIsValid, passwordIsValid]);

	const emailChangeHandler = (event) => {
		// setEnteredEmail(event.target.value);
		dispatchEmail({ type: 'USER_INPUT', val: event.target.value });

		setFormIsValid(event.target.value.includes('@') && passwordState.isValid);
	};

	const passwordChangeHandler = (event) => {
		//setEnteredPassword(event.target.value);
		dispatchPassword({ type: 'USER_INPUT', val: event.target.value });

		// setFormIsValid(
		// 	enteredEmail.includes('@') && event.target.value.trim().length > 6
		// );
		setFormIsValid(emailState.isValid && event.target.value.trim().length > 6);
	};

	const validateEmailHandler = () => {
		// setEmailIsValid(enteredEmail.includes('@'));
		// setEmailIsValid(emailState.isValid);
		dispatchEmail({ type: 'INPUT_BLUR' });
	};

	const validatePasswordHandler = () => {
		// setPasswordIsValid(enteredPassword.trim().length > 6);
		dispatchPassword({ type: 'INPUT_BLUR' });
	};

	const submitHandler = (event) => {
		event.preventDefault();
		if (formIsValid) {
			props.onLogin(emailState.value, passwordState.value);
			// props.onLogin(enteredEmail, enteredPassword);
		} else if(!emailIsValid) {
			emailInputRef.current.activate();
		} else {
			passwordInputRef.current.activate();
		}
	};

	return (
		<Card className={classes.login}>
			<form onSubmit={submitHandler}>
				<Input 
					ref={emailInputRef}
					id="email" label="E-mail" type="email" 
					isValid={emailIsValid}
					value={emailState.value}
					onChange={emailChangeHandler}
					onBlur={validateEmailHandler}
				/>
				<Input 
					ref={passwordInputRef}
					id="password" 
					label="Password" type="password" 
					isValid={passwordIsValid}
					value={passwordState.value}
					onChange={passwordChangeHandler}
					onBlur={validatePasswordHandler}
				/>
				<div className={classes.actions}>
					<Button type='submit' className={classes.btn} disabled={!formIsValid}>
						Login
					</Button>
				</div>
			</form>
		</Card>
	);
};

export default Login;



