import React, {useState} from 'react';
import style from './Header.module.css';
import Search from "../Search";
import AddMovie from "../AddMovie";
import logo from '../../../public/logo.svg';
import {navigateToSearch} from "../../helper/routeHelper";
import {useNavigate, useParams, useSearchParams} from "react-router-dom";

const Header = (props) => {
  let navigate = useNavigate();
  let [searchParams] = useSearchParams();
  let {searchQuery} = useParams();
  let [search, setSearch] = useState(searchQuery ? searchQuery : "")

  let handleSearch = () => {
    navigateToSearch(navigate, search, searchParams)
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
