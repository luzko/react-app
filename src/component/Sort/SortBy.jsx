import React from 'react';
import {connect} from 'react-redux';
import style from './SortBy.module.css';
import SortOrder from '../SortOrder';
import {options} from '../../data/data';
import {getMovies, setSort} from '../../store/actions';

const SortBy = ({sortMovie, setSortMovie, fetchMovies}) => {
  const selectionChange = (value) => {
    setSortMovie(value);
    fetchMovies();
  };

  return (
      <div>
        <span className={style.label}>SORT BY:</span>
        <select
            defaultValue={sortMovie}
            className={style.dropdown}
            onChange={(e) => selectionChange(e.target.value)}
        >
          {options.map((option) => (
              <option key={option.id} value={option.value}>
                {option.label}
              </option>
          ))}
        </select>
        <SortOrder/>
      </div>
  );
};

const mapStateToProps = (state) => ({
  sortMovie: state.sort
});

const mapDispatchToProps = (dispatch) => ({
  setSortMovie: (sortMovie) => dispatch(setSort(sortMovie)),
  fetchMovies: () => dispatch(getMovies())
});

export default connect(mapStateToProps, mapDispatchToProps)(SortBy);
