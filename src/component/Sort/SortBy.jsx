import React from 'react';
import SortOrder from '../SortOrder';
import style from './SortBy.module.css';

const SortBy = (props) => {
  return (
      <div>
        <span className={style.label}>SORT BY:</span>
        <select
            defaultValue={props.sortBy.field}
            className={style.dropdown}
            onChange={(e) => props.changeSort(e.target.value)}
        >
          {props.options.map((option) => (
              <option key={props.options.indexOf(option)} value={option}>
                {option}
              </option>
          ))}
        </select>
        <SortOrder sortBy={props.sortBy} changeOrder={props.changeOrder}/>
      </div>
  );
};

export default SortBy;
