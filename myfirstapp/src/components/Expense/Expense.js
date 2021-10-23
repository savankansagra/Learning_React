import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expense(data) {
    const expenseMap = data.items;
    // console.log("Expense is evaluated by React.")

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