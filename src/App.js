import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortKey, setSortKey] = useState('');

  const handleAddExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const handleDelete = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  const handleSort = (key) => {
    setSortKey(key);
    const sorted = [...expenses].sort((a, b) =>
      a[key].toString().localeCompare(b[key].toString())
    );
    setExpenses(sorted);
  };

  const filteredExpenses = expenses.filter(exp =>
    exp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    exp.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <div className="content">
        <ExpenseForm onAddExpense={handleAddExpense} />
        <ExpenseTable
          expenses={filteredExpenses}
          onDelete={handleDelete}
          onSort={handleSort}
        />
      </div>
    </div>
  );
}

export default App;
