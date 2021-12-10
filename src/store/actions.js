import actionType from './actionType';
import axios from 'axios';
import {getApi} from '../service/apiService';

/*
export const createMovie = () => () {}

export const deleteMovie = () => () {}

export const updateMovie = () => () {}
*/

export const getMovies = () => (dispatch, getState) => {
  const {filterSort} = getState()
  getApi(filterSort)
  .then(movies => {
    dispatch(setMovies(movies));
  })
  .catch(error => {
    dispatch(errorProcessing(error));
  })
}

export const moviesProcessing = () => ({
  type: actionType.PROCESSING_START
});

export const errorProcessing = error => ({
  type: actionType.PROCESSING_ERROR,
  payload: {
    error
  }
});

export const setSort = sortBy => ({
  type: actionType.SET_SORT,
  payload: {
    sortBy
  }
});

export const setSortOrder = sortOrder => ({
  type: actionType.SET_SORT_ORDER,
  payload: {
    sortOrder
  }
});

export const setFilter = filter => ({
  type: actionType.SET_FILTER,
  payload: {
    filter
  }
});

const setMovies = movies => ({
  type: actionType.SET_MOVIES,
  payload: {
    movies
  }
})
