import React from 'react';
import style from './Genre.module.css';
import PropTypes from "prop-types";

const Genre = ({genre}) => {
  return (
      <button className={style.option}>{genre.title.toUpperCase()}</button>
  );
};

Genre.propTypes = {
  genre: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired
};

export default Genre;
