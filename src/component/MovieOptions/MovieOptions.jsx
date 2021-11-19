import React from 'react';
import style from './MovieOptions.module.css';

const MovieOptions = ({show, action}) => {
  const rootClasses = [style.movieOptions]

  rootClasses.push(show ? '' : style.hidden)

  return (
      <div className={rootClasses.join(' ')} onMouseLeave={() => action('close')}>
        <div className={style.options}>
          <button className={style.button} onClick={() => action('edit')}>
            EDIT
          </button>
          <button className={style.button} onClick={() => action('delete')}>
            DELETE
          </button>
        </div>
      </div>
  );
};

export default MovieOptions;
