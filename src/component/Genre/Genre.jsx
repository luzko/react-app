import React from 'react';
import style from './Genre.module.css';
import PropTypes from "prop-types";

const Genre = ({title, value, filterChange}) => {
  return (
        <button className={style.option} onClick={() => filterChange(value)}>
          {title.toUpperCase()}
        </button>
  );
};

Genre.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Genre;
