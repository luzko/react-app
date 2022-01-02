import React from 'react';
import style from './Search.module.css';

const Search = ({searchValue, setSearchValue, handleSearch, keyEnter}) => {
  return (
      <>
        <div className={style.headerText}>FIND YOUR MOVIE</div>
        <div className={style.search}>
          <input
              type="text"
              placeholder="What do you want to watch?"
              className={style.searchInput}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyPress={keyEnter}
          />
          <button className={style.searchButton} onClick={handleSearch}>
            SEARCH
          </button>
        </div>
      </>
  );
};

export default Search;
