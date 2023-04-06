import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("");
  const rows = [];

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  };

  for (let i = 0; i < props.expenses.length; i++) {
    rows.push(
      <ExpenseItem
        title={props.expenses[i].title}
        date={props.expenses[i].date}
        amount={props.expenses[i].amount}
      />
    );
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {rows}
      </Card>
    </div>
  );
}

export default Expenses;
