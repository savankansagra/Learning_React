import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';

function ExpenseItem(props) {

    const expenseDate = props.date;
    const expense_title = props.title;
    const expense_price = props.amount;

    return (
        <Card className="expense-item">
            <ExpenseDate expenseDate={expenseDate} />
            <div className="expense-item__description">
                <h4>{expense_title}</h4>
                <div className="expense-item__price">{expense_price}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;