import React from 'react';
import style from './Header.module.css';
import Search from "../Search/Search";

const Header = ({logoUrl}) => {
  return (
      <header className={style.header}>
        <div className={style.logoAndButton}>
          <img src={logoUrl} alt="logo" className={style.logo}/>
          <button className={style.addButton}>+ ADD MOVIE</button>
        </div>
        <Search/>
      </header>
  );
};

export default Header;
