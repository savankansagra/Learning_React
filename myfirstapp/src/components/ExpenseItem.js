import './ExpenseItem.css';

function ExpenseItem(props) {

    const expenseDate = props.date;
    const expense_title = props.title;
    const expense_price = props.amount;

    return (
        <div className="expense-item">
            <div>{expenseDate.toISOString()}</div>
            <div className="expense-item__description">
                <h4>{expense_title}</h4>
                <div className="expense-item__price">{expense_price}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;