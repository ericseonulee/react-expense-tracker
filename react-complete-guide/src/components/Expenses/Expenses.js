import Card from "../UI/Card";
import ExpenseList from "./ExpenseList";
import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) =>
    !filteredYear ? true : expense.date.getFullYear() === parseInt(filteredYear)
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpenseList expenses={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;
