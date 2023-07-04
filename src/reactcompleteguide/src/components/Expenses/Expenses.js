import React, {useEffect, useState} from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import "./ExpensesFilter.css";

const Expenses = (props) => {
  const expenses = props.expenses;
  const [filteredYear, setfilteredYear] = useState('2020');
  useEffect(()=>{console.log("aqui: " + filteredYear);}, [filteredYear]);

  const getSelectedYear = selectedYear =>  {
    console.log(selectedYear);
    setfilteredYear(selectedYear);
    console.log("In Expenses.js");
    console.log(filteredYear);
  }

  return (
    <div>
      
      <Card className="expenses">
      
      <ExpensesFilter selected={filteredYear} onSelectYear = {getSelectedYear}/>
        <label>Year: {filteredYear}</label>
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
