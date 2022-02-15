import React, {useState} from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // })

  const titleChangeHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value
    // })

    // safer way, will guarentee use the latest state.
    // setUserInput((prevState) => {
    //   return {...prevState, enteredTitle: event.target.value}
    // });


    setEnteredTitle(event.target.value);
    console.log('Title:', event.target.value);
    // console.log('enteredTitle:', userInput['enteredTitle']);
    
  }
  const amountChangeHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value
    // })
    // console.log('amount: ', event.target.value);
    setEnteredAmount(event.target.value);

  }
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value
    // })
    // console.log('date:', event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate)
    };
    // console.log('form expenseData: ', expenseData);


    props.onSaveExpenseData(expenseData);
    // two ways binding.
    // setEnteredTitle('');
    // setEnteredAmount('');
    // setEnteredDate('');
    
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input 
            type='text' 
            value={enteredTitle} 
            onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input 
            type='number' 
            value={enteredAmount}
            onChange={amountChangeHandler}  min='0.01' step='0.01' />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date'
            value={enteredDate}
            onChange={dateChangeHandler} min='2019-01-01' max='2022-12-31' />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={props.onCancel}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
