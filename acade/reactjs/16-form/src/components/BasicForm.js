import useInput from '../hooks/use-input';

const BasicForm = (props) => {

  const validateName = (value) => {
    return value.trim() !== ''
  }

  const {
    value: firstName,
    isValid: firstNameIsValid,
    hasError: firstNameInputHasError, 
    valueChangeHandler: firstNameChangedHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput,
  } = useInput(validateName);

  let formIsValid = true;
  if (!firstNameIsValid) {
    formIsValid = false;
  }

  const formSubmitHandler = event => {
    event.preventDefault();
    
    if (!firstNameIsValid) {
      return;
    }
    // NOT IDEAL, don't manipulate the DOM directly. leave it to React.
    // setEnteredName('');
    // setEnteredNameTouched(false);
    resetFirstNameInput();
  }

  const firstNameInputClasses = firstNameInputHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        <div className={firstNameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input 
            type='text' 
            id='name'
            onChange={firstNameChangedHandler}
            onBlur={firstNameBlurHandler}
            value={firstName} />
        </div>
        <div className='form-control'>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' />
        </div>
      </div>
      <div className='form-control'>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' />
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
