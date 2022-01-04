import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import style from './SortBy.module.css';
import SortOrder from '../SortOrder';
import {options} from '../../constant/constant';
import {getMovies, setSort} from '../../store/actions';
import {useNavigate, useParams, useSearchParams} from "react-router-dom";

const SortBy = ({sortMovie, setSortMovie, fetchMovies}) => {
  let navigate = useNavigate();
  let [searchParams] = useSearchParams();
  let {searchQuery} = useParams();

  const changeSortBy = (sortBy) => {
    searchParams.set("sortBy", sortBy);
    navigate(`/search${searchQuery ? '/' + searchQuery : '/'}?${searchParams.toString()}`)
  }

  useEffect(() => {
    changeSortBy(sortMovie)
  }, [sortMovie])

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
  sortMovie: state.filterSort.sortBy
});

const mapDispatchToProps = (dispatch) => ({
  setSortMovie: (sortMovie) => dispatch(setSort(sortMovie)),
  fetchMovies: () => dispatch(getMovies())
});

export default connect(mapStateToProps, mapDispatchToProps)(SortBy);
