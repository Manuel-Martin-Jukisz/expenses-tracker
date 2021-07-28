import { useState } from 'react';

import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './css/Expenses.css';


const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filteredYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear  
  })

  let expensesContent = <p>No expenses found for this year.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
      ));
  }
  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filteredYear}
          onFilterYear={filteredYearHandler}
        />

        {expensesContent}
      </Card>
    </div>
  );
};
export default Expenses;
