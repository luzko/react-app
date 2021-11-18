import React from 'react';
import style from './Header.module.css';
import Search from "../Search";
import AddMovie from "../AddMovie";
import logo from '../../../public/logo.svg';

const Header = () => {
  return (
      <header className={style.header}>
        <div className={style.logoAndButton}>
          <img src={logo} alt="logo" className={style.logo}/>
          <AddMovie/>
        </div>
        <Search/>
      </header>
  );
};

export default Header;
