import React, {useEffect, useState} from 'react';
import style from './Header.module.css';
import Search from "../Search";
import AddMovie from "../AddMovie";
import logo from '../../../public/logo.svg';
import {useHistory} from 'react-router-dom';

const Header = (props) => {

  useEffect(() => {
    history.push('/search/')
  }, []);

  const history = useHistory();
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = () => {
    props.setSearch(searchValue)
    props.processing();
    props.fetchMovies();

    history.push('/search/' + searchValue)
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
