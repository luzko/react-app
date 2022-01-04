import React, {useEffect} from "react";
import {connect} from 'react-redux';
import style from "./SortOrder.module.css";
import {getMovies, setSortOrder} from '../../store/actions';
import {useNavigate, useParams, useSearchParams} from "react-router-dom";

const SortOrder = ({sortOrderMovie, setSortOrderMovie, fetchMovies}) => {
  let navigate = useNavigate();
  let [searchParams] = useSearchParams();
  let {searchQuery} = useParams();

  const changeSortOrder = (sortOrder) => {
    searchParams.set("sortOrder", sortOrder);
    navigate(`/search${searchQuery ? '/' + searchQuery : '/'}?${searchParams.toString()}`)
  }

  useEffect(() => {
    changeSortOrder(sortOrderMovie)
  }, [sortOrderMovie])

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
