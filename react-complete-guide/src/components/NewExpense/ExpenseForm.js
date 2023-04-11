import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
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
      amount: +userInput.amount,
      date: new Date(userInput.date + 'T00:00'),
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
            name="title"
            onChange={inputChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={userInput.amountInput}
            name="amount"
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
            name="date"
            min="2019-01-01"
            max="2023-12-31"
            onChange={inputChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
