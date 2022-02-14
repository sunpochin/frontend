import {useEffect , useState} from 'react';

import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
  const validateName = (value) => {
    return value.trim() !== ''
  }
  const validateEmail = (value) => {
    return value.includes('@');
  }
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError, 
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput(validateName);
  
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError, 
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(validateEmail);


  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  // const [formIsValid, setFormIsValid] = useState(false);

  // const enteredEmailIsValid = enteredEmail.includes('@');
  // const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = true;
  if (!enteredNameIsValid) {
    formIsValid = false;
  }
  if (!enteredEmailIsValid) {
    formIsValid = false;
  }

  // const emailInputChangeHandler = event => {
  //   setEnteredEmail(event.target.value);
  // }

  // const emailInputBlurHandler = event => {
  //   setEnteredEmailTouched(true);
  // }

  const formSubmitHandler = event => {
    event.preventDefault();
    
    if (!enteredNameIsValid) {
      return;
    }

    console.log('enteredName: ', enteredName, 'enteredEmail: ', enteredEmail);
    // NOT IDEAL, don't manipulate the DOM directly. leave it to React.
    // setEnteredName('');
    // setEnteredNameTouched(false);
    resetNameInput();
    // setEnteredEmail('');
    // setEnteredEmailTouched(false);
    resetEmailInput();
  }

  const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' 
          id='name' 
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
      </div>

      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input type='text' 
          id='email' 
          onChange={emailChangedHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
      </div>

      {nameInputHasError ? <p className="error-text">Invalid input!</p> : null}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
