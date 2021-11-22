import React from 'react';
import style from './SortBy.module.css';

const SortBy = ({options, sortBy, changeSort}) => {
  return (
      <div>
        <span className={style.label}>SORT BY:</span>
        <select
            defaultValue={sortBy}
            className={style.dropdown}
            onChange={(e) => changeSort(e.target.value)}
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
