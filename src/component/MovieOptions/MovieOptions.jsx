import React from 'react';
import style from './MovieOptions.module.css';

const MovieOptions = ({show, close, openEditModal, openDeleteModal}) => {
  const rootClasses = [style.movieOptions]

  rootClasses.push(show ? '' : style.hidden)

  return (
      <div className={rootClasses.join(' ')} onMouseLeave={() => close()}>
        <div className={style.options}>
          <button className={style.button} onClick={() => openEditModal()}>
            EDIT
          </button>
          <button className={style.button} onClick={() => openDeleteModal()}>
            DELETE
          </button>
        </div>
      </div>
  );
};

export default MovieOptions;
