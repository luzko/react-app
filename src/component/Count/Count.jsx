import React from 'react';
import style from './Count.module.css';

const Count = () => {
  const mockCount = 10;
  return (
      <div className={style.count}>
        {mockCount} movies found
      </div>
  );
}

export default Count;
