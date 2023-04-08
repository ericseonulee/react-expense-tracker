import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isAdding, setIsAdding] = useState(false);

  const onAddHandler = () => {
    setIsAdding(true);
  };

  const onCancelAddHandler = () => {
    setIsAdding(false);
  };

  const saveExpenseDataHandler = (expenseDataInput) => {
    const expenseData = {
      ...expenseDataInput,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsAdding(false);
  };

  return (
    <div className="new-expense">
      {!isAdding && <button onClick={onAddHandler}>Add New Expense</button>}
      {isAdding && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={onCancelAddHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
