import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';
import Expense from './components/Expense';
import React from 'react';

function App() {

  const expense = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  // return React.createElement('div', {}, React.createElement(Expense, { items: expense },))

  return (
    <div>
      <Expense items={expense}/>
    </div>
  );
}

export default App;
