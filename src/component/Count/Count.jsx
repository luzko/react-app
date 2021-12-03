import React from 'react';
import style from './Count.module.css';
import {useSelector} from 'react-redux';

const Count = () => {
  const count = useSelector((state) => state.movies.length);

  return (
      <div className={style.count}>
        {count} movies found
      </div>
  );
}

export default Count;
