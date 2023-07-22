import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  //   const expenseDate = new Date(2021, 2, 28);
  //   const expenseTitle = "Car Insurance";
  //   const exepenseAmount = 294.67;

  // const [title, setTitle] = useState(props.title);
  // console.log("ExpenseItem evaluated by React");

  // let title = props.title;

  // const clickHandler = () => {
  //   // title = 'Updated!';
  //   setTitle("Updated!");
  //   console.log(title);
  // };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
        </div>
        <div className="expense-item__price">${props.amount}</div>
        {/* <button onClick={clickHandler}> Change title</button> */}
      </Card>
    </li>
  );
};

export default ExpenseItem;
