import React from 'react';
import style from './Count.module.css';

const Count = ({count}) => {
  return (
      <div className={style.count}>
        {count} movies found
      </div>
  );
}

export default Count;
