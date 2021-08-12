import { useState } from "react";

import "./Expenses.css"
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [enteredYear, setEnteredYear] = useState(2020);
  const filteredExpenses = props.data.filter(expense => expense.date.getFullYear() === +enteredYear);

  const onAddYear = (year) => {
    setEnteredYear(year);
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter 
          selected={enteredYear} 
          addYear={onAddYear} 
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  )
}

export default Expenses;