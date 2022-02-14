import React, {useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    console.log('start editing');
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    console.log('stop editing');
    setIsEditing(false);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    console.log('NewExpense Data: ', expenseData);
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  let contentBtnExpense;
  if (isEditing) {
    contentBtnExpense = (
      <div>
        <ExpenseForm onCancel={stopEditingHandler} onSaveExpenseData={saveExpenseDataHandler} />
      </div>
    );
  } else {
    contentBtnExpense = (
      <div>
        <button onClick={startEditingHandler} >Add new expense</button>
        </div>
    );
  }

  return (
    <div className='new-expense'>
      {contentBtnExpense}
      {/* {!isEditing && <button onClick={startEditingHandler}>Add new expense</button>}

      {isEditing && <ExpenseForm onCancel={stopEditingHandler} onSaveExpenseData={saveExpenseDataHandler} />} */}
      
    </div>
  );
};

export default NewExpense;
