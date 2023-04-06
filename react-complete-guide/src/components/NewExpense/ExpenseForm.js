import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    titleInput: "",
    amountInput: "",
    dateInput: "",
  });

  const inputChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };

  const submitHanlder = (event) => {
    event.preventDefault();

    const expenseData = {
      ...userInput,
      dateInput: new Date(userInput.dateInput),
    };

    props.onSaveExpenseData(expenseData);
    setUserInput({
      titleInput: "",
      amountInput: "",
      dateInput: "",
    });
  };

  return (
    <form onSubmit={submitHanlder}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.titleInput}
            name="titleInput"
            onChange={inputChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={userInput.amountInput}
            name="amountInput"
            min="0.01"
            step="0.01"
            onChange={inputChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={userInput.dateInput}
            name="dateInput"
            min="2019-01-01"
            max="2023-12-31"
            onChange={inputChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
