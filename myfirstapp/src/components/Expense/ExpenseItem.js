import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import React, { useState } from 'react';

function ExpenseItem(props) {

    const expenseDate = props.date;
    const expense_price = props.amount;

    const [expense_title, setExpense_title] = useState(props.title);
    console.log("ExpenseItem is evaluated by react.")

    const clickHandler = () => {
        setExpense_title("Updated");    
    };

    return (
        <Card className="expense-item">
            <ExpenseDate expenseDate={expenseDate} />
            <div className="expense-item__description">
                <h4>{expense_title}</h4>
                <div className="expense-item__price">{expense_price}</div>
            </div>
            <button onClick={clickHandler}>Change title!</button>
        </Card>
    );
}

export default ExpenseItem;