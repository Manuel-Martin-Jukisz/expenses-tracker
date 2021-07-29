import { useState } from 'react';
import './Css/NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const [formVisible, setFormVisible] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setFormVisible(false)
  };

  const visabilityHandler = () => {
    formVisible === false ? setFormVisible(true) : setFormVisible(false)
  };

  return (
    <div className="new-expense">
      {!formVisible && <button onClick={visabilityHandler}>Add New Expense</button>}
      {formVisible && <ExpenseForm onSaveExpenseDate={saveExpenseDataHandler} onCancel={visabilityHandler} />}
    </div>
  );
};

export default NewExpense;
