import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseList from './ExpenseList';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className='expenses'>
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpenseList items={filteredExpense} />
      {/* {filteredExpense.length === 0 && <p>No expenses found.</p>}
      {filteredExpense.length > 0 &&
        filteredExpense.map((expense) => (
          <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
        ))} */}
      {/* 위와 아래의 같은 방법 */}
      {/* {filteredExpense.length === 0 ? (
        <p>No expenses found.</p>
      ) : (
        filteredExpense.map((expense) => (
          <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
        ))
      )} */}
    </Card>
  );
};

export default Expenses;
