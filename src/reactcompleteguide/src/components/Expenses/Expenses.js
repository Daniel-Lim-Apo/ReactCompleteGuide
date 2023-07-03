import React, {useEffect, useState} from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "../NewExpense/ExpensesFilter";

const Expenses = (props) => {
  const expenses = props.expenses;
  const [filterYear, setFilterYear] = useState("");
  useEffect(()=>{console.log("aqui: " + filterYear);}, [filterYear]);

  const getSelectedYear = selectedYear =>  {
    console.log(selectedYear);
    setFilterYear(selectedYear);
    console.log("In Expenses.js");
    console.log(filterYear);
  }

  return (
    <div>
      
      <Card className="expenses">
      <ExpensesFilter onSelectYear = {getSelectedYear}/>
        {expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
