import React, {useEffect, useState} from 'react';
import style from './Header.module.css';
import Search from "../Search";
import AddMovie from "../AddMovie";
import logo from '../../../public/logo.svg';
import {useNavigate, useSearchParams} from 'react-router-dom';

const Header = (props) => {
  let navigate = useNavigate();
  let [searchParams] = useSearchParams();
  let [searchValue, setSearchValue] = useState(props.searchQuery ? props.searchQuery : '');

  const handleSearch = () => {
    props.setSearch(searchValue)
    props.processing();
    props.fetchMovies();
    navigate(`/search${searchValue ? '/' + searchValue : '/'}?${searchParams.toString()}`)
  };

  const keyEnter = (e) => {
    if (e.which === 13) {
      handleSearch();
    }
  };

  return (
      <header className={style.header}>
        <div className={style.logoAndButton}>
          <img src={logo} alt="logo" className={style.logo}/>
          <AddMovie createMovie={props.createMovie}/>
        </div>
        <Search
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            handleSearch={handleSearch}
            keyEnter={keyEnter}
        />
      </header>
  );
};

export default Header;
