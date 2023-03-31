import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  const rows = [];

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
      <Card className="expenses">{rows}</Card>
    </div>
  );
}

export default Expenses;
