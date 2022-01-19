import React, {useState} from 'react';
import style from './Header.module.css';
import Search from "../Search";
import AddMovie from "../AddMovie";
import logo from '../../../img/logo.svg';
import {navigateToSearch} from "../../helper/routeHelper";
import {useHistory, useLocation, useParams} from "react-router-dom";

const Header = (props) => {
  let history = useHistory();
  let {searchParam} = useLocation();
  let searchParams = new URLSearchParams(searchParam);
  let {searchQuery} = useParams();
  let [search, setSearch] = useState(searchQuery ? searchQuery : "")

  let handleSearch = () => {
    navigateToSearch(history, search, searchParams)
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
            searchValue={search}
            setSearchValue={setSearch}
            handleSearch={handleSearch}
            keyEnter={keyEnter}
        />
      </header>
  );
};

export default Header;
