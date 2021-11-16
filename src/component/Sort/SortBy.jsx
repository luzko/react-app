import React from 'react';
import style from './SortBy.module.css';

const SortBy = ({options}) => {
  return (
      <div>
        <span className={style.label}>SORT BY:</span>
        <select className={style.dropdown}>
          {options.map((option) => (
              <option key={option.id} value={option.value}>
                {option.label.toUpperCase()}
              </option>
          ))}
        </select>
      </div>
  );
};

export default SortBy;
