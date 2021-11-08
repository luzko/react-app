import React from 'react';
import style from './Footer.module.css';

const Footer = ({logoUrl}) => {
  return (
      <footer className={style.footer}>
        <img src={logoUrl} alt="logo" className={style.logo}/>
      </footer>
  );
};

export default Footer;
