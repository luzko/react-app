import React from 'react';
import style from './Genre.module.css';
import PropTypes from "prop-types";

const Genre = ({title}) => {
  return (
      <button className={style.option}>{title.toUpperCase()}</button>
  );
};

Genre.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Genre;
