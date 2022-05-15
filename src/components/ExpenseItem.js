import React from 'react';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  // console.log(props.date.toLocaleString('en-US', { month: 'long' }));
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();
  console.log(month, day, year);

  return (
    <div className='expense-item'>
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className='expense-item__description'>
        <div>{props.title}</div>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
