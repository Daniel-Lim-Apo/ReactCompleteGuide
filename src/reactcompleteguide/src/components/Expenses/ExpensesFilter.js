import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

  const handleOnChange = (event) => {
    console.log("send value " + event.target.value + " from Expenses filter ");
    props.onSelectYear(event.target.value);

  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={handleOnChange}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;