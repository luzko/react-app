import React from "react";
import {connect} from 'react-redux';
import style from "./SortOrder.module.css";
import {getMovies, setSortOrder} from '../../store/actions';

const SortOrder = ({sortOrderMovie, setSortOrderMovie, fetchMovies}) => {
  const onSelectionChange = (value) => {
    setSortOrderMovie(value === 'asc' ? 'desc' : 'asc');
    fetchMovies();
  };

  return (
      <div className={style.order}
           onClick={() => onSelectionChange(sortOrderMovie)}>
        {sortOrderMovie === 'asc' ? "▲" : "▼"}
      </div>
  );
}

const mapStateToProps = (state) => ({
  sortOrderMovie: state.filterSort.sortOrder
});

const mapDispatchToProps = (dispatch) => ({
  setSortOrderMovie: (sortOrderMovie) => dispatch(setSortOrder(sortOrderMovie)),
  fetchMovies: () => dispatch(getMovies())
});

export default connect(mapStateToProps, mapDispatchToProps)(SortOrder);
