import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpense = (props) => {
  const [isFormShown, setIsFormShown] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  const addNewExpenseHandler = () => {
    setIsFormShown(true);
  }

  const cancelFormHandler = () => {
    setIsFormShown(false);
  }

  let content = <button onClick={addNewExpenseHandler}>Add New Expense</button>;
  if (isFormShown) {
    content = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelFormHandler}/>;
  }

  return ( 
    <div className="new-expense">
      {content}
    </div>
  );
};

export default NewExpense;