import React from 'react';
import style from './Genre.module.css';
import PropTypes from "prop-types";

const Genre = ({title, isActive, filterChange}) => {
  return (
      <button className={`${style.option} ${(isActive ? style.active : "")}`} onClick={filterChange}>
        {title}
      </button>
  )
};

Genre.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Genre;
