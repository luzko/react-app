import React from 'react';
import style from './Genre.module.css';
import PropTypes from "prop-types";

const Genre = ({title, value, filterGenre, filterChange}) => {
  const rootClasses = [style.option]
  rootClasses.push(value === filterGenre ? style.active : '')

  return (
        <button className={rootClasses.join(' ')} onClick={() => filterChange(value)}>
          {title.toUpperCase()}
        </button>
  );
};

Genre.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Genre;
