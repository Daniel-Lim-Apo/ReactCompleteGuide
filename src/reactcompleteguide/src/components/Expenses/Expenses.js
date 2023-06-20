import React from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const expenses = props.expenses;

  return (
    <Card className="expenses">
      {expenses.map((expense) => (
        <ExpenseItem
          key = {expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          key={expense.title}
        />
      ))}
    </Card>
  );
};

export default Expenses;
