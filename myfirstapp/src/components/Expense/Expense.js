import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expense(data) {
    const expenseMap = data.items;

    return (
        <div>
            {
                expenseMap.map(expense => {
                    return <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />
                })
            }
        </div>
    )
}

export default Expense;