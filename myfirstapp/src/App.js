import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {

  const expense = [
    {title:'Car insurance', amount:294.56, date: new Date(2021,2,28)},
    {title:'Car insurance 2', amount:295.56, date: new Date(2021,3,28)},
    {title:'Car insurance 3', amount:296.56, date: new Date(2021,4,28)},
    {title:'Car insurance 4', amount:297.56, date: new Date(2021,5,28)}
  ]

  return (
    <div>
      {
        expense.map(exp => (
          <ExpenseItem title={exp.title} amount={exp.amount} date={exp.date}/>    
        ))
      }
      <ExpenseItem title={expense[0].title} amount={expense[0].amount} date={expense[0].date}/>
      <ExpenseItem title={expense[1].title} amount={expense[1].amount} date={expense[1].date}/>
      <ExpenseItem title={expense[2].title} amount={expense[2].amount} date={expense[2].date}/>
      <ExpenseItem title={expense[3].title} amount={expense[3].amount} date={expense[3].date}/>
    </div>
  );
}

export default App;
