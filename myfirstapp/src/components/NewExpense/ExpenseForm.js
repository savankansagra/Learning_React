import React from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>title </label>
                    <input type="text" />
                </div>
                <div className="new-expense__control">
                    <label>amount </label>
                    <input type="number" />
                </div>
                <div className="new-expense__control">
                    <label>date </label>
                    <input type="date" min="2019-01-01" max="2025-01-01"/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;