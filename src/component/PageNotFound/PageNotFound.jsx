import React from 'react';
import style from './PageNotFound.module.css';
import notFound from '../../../public/404.png';
import {Link} from 'react-router-dom';

const PageNotFound = () => {
  return (
      <div className={style.pageNotFound}>
        <span className={style.text}>Page Not Found</span>
        <img
            src={notFound}
            alt='not found'
            className={style.notFoundImage}
        />
        <Link to='/'>
          <button className={style.goBack}>GO BACK</button>
        </Link>
      </div>
  );
};

export default PageNotFound;
