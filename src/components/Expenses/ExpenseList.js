import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';
const ExpenseList = (props) => {
  // let expensesContent = <p>Ne expense found.</p>;
  if (props.items.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expense.</h2>;
  }
  // if (props.items.length > 0) {
  //   expensesContent = props.items.map((expense) => (
  //     <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
  //   ));
  // }
  return (
    <ul className='expense-list'>
      {props.items.map((expense) => (
        <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
      ))}
    </ul>
  );
};

export default ExpenseList;
