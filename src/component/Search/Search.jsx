import React from 'react';
import style from './Search.module.css';

const Search = () => {
  return (
      <>
        <div className={style.headerText}>FIND YOUR MOVIE</div>
        <div className={style.search}>
          <input
              type="text"
              placeholder="What do you want to watch?"
              className={style.searchInput}
          />
          <button className={style.searchButton}>SEARCH</button>
        </div>
      </>
  );
};

export default Search;
