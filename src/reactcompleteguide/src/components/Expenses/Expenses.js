import React, { useEffect, useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import "./ExpensesFilter.css";

const Expenses = (props) => {
  const expenses = props.expenses;
  const [filteredYear, setfilteredYear] = useState("2020");

  let filterInfoText = "2019, 2021 & 2022";

  if (filteredYear === "2019") {
    filterInfoText = "2020, 2021 & 2022";
  } else if (filteredYear === "2021") {
    filterInfoText = "2019, 2020 & 2022";
  } else if (filteredYear === "2022") {
    filterInfoText = "2019, 2020 & 2021";
  }

  const getSelectedYear = (selectedYear) => {
    // console.log(selectedYear);
    setfilteredYear(selectedYear);

    // console.log("In Expenses.js");
    // console.log(filteredYear);
  };

  const filteredTitems = props.items.filter(
    (user) => user.date.getFullYear().toString() === filteredYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onSelectYear={getSelectedYear}
        />
        <p>Data for years {filterInfoText} is hidden.</p>
        <label>Year: {filteredYear}</label>
        {filteredTitems.length === 0 && <p>No expenses found.</p>}

        {filteredTitems.length > 0 &&
          filteredTitems.map((expense) => (
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
