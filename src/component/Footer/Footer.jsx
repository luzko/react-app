import React from 'react';
import style from './Footer.module.css';
import logo from '../../../img/logo.svg';

const Footer = () => {
  return (
      <footer className={style.footer}>
        <img src={logo} alt="logo" className={style.logo}/>
      </footer>
  );
};

export default Footer;
