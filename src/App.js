import { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';
import './App.css';

function App() {
  const[expenses, setExpenses] = useState([]);

  const handleAddExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };
  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <div className="content">
        <ExpenseForm onAddExpense={handleAddExpense} />
        <ExpenseTable expenses={expenses} />
      </div>
    </div>
  )
}
export default App
