import React, {useState} from 'react'
import Card from '../UI/Card'
import Button from '../UI/Button'
import classes from './AddUser.module.css'
import ErrorModal from '../UI/ErrorModal'
import Wrapper from '../Helpers/Wrapper'

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('')
  const [enteredAge, setEnteredAge] = useState('')
  const [error, setError] = useState();

  const usernameChangeHandler = (event) => {
    event.preventDefault();
    setEnteredUsername(event.target.value);
  }
  const ageChangeHandler = (event) => {
    event.preventDefault();
    setEnteredAge(event.target.value);
  }

  const errorHandler = () => {
    setError(null);
  }

  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredAge.trim().length === 0 || enteredUsername.trim().length === 0) {
      console.log('invalid input');
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid username and age'
      });
      return;
    }
    if (+enteredAge < 0 || +enteredAge > 120) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (>0 and <120)'
      });
      console.log('invalid input');
      return;
    }

    console.log('enteredUsername: ', enteredUsername, ', age:', enteredAge);
    props.onAddUser(enteredUsername, +enteredAge);
    // setEnteredUsername('');
    // setEnteredAge('');

  }

  return (
    <Wrapper>
      {error && <ErrorModal 
        onConfirm={errorHandler}
        title={error.title} 
        message={error.message} /> }

      <Card cssClass={classes.input}>
        <div>
          <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input id="username"
              value={enteredUsername} 
              onChange={usernameChangeHandler}
              type="text" />
            <label htmlFor="age">Age (years)</label>
            <input id="age"
              value={enteredAge}
              onChange={ageChangeHandler}
              type="number" />
            <Button type="submit">Add user</Button>
          </form>
        </div>
      </Card>
    </Wrapper>
  )

  // return [
  //   error && (<ErrorModal 
  //     onConfirm={errorHandler}
  //     title={error.title} 
  //     message={error.message} />)
  //     ,
  //   <Card cssClass={classes.input}>
  //     <div>
  //       <form onSubmit={addUserHandler}>
  //         <label htmlFor="username">Username</label>
  //         <input id="username"
  //           value={enteredUsername} 
  //           onChange={usernameChangeHandler}
  //           type="text" />
  //         <label htmlFor="age">Age (years)</label>
  //         <input id="age"
  //           value={enteredAge}
  //           onChange={ageChangeHandler}
  //           type="number" />
  //         <Button type="submit">Add user</Button>
  //       </form>
  //     </div>
  //   </Card>
  // ]

}

export default AddUser
