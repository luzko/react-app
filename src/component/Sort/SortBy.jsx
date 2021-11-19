import React from 'react';
import style from './SortBy.module.css';

const SortBy = ({options, sortBy, changeSort}) => {
  const changeSelect = (e) => changeSort(e.target.value)

  return (
      <div>
        <span className={style.label}>SORT BY:</span>
        <select
            defaultValue={sortBy}
            className={style.dropdown}
            onChange={changeSelect}
        >
          {options.map((option) => (
              <option key={option.id} value={option.value}>
                {option.label}
              </option>
          ))}
        </select>
      </div>
  );
};

export default SortBy;
