import actionType from './actionType';
import {
  deleteApi,
  getApi,
  getMovieById,
  postApi,
  updateApi
} from '../service/apiService';

export const createMovie = movie =>
    dispatch =>
        postApi(movie)
        .then((data) => {
          dispatch(addMovieAction(data))
        })
        .catch(error => {
          dispatch(errorProcessing(error));
        })

export const deleteMovie = id =>
    dispatch =>
        deleteApi(id)
        .then(() => {
          dispatch(deleteMovieAction(id))
        })
        .catch(error => {
          dispatch(errorProcessing(error));
        })

export const updateMovie = movie =>
    dispatch =>
        updateApi(movie)
        .then((data) => {
          dispatch(updateMovieAction(data))
        })
        .catch(error => {
          dispatch(errorProcessing(error));
        })

export const findMovieById = id =>
    dispatch => {
      getMovieById(id)
      .then(movie => {
        dispatch(setSelectedMovie(movie))
      })
      .catch(error => {
        dispatch(errorProcessing(error));
      })
    }

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

export const setSearch = search => ({
  type: actionType.SET_SEARCH,
  payload: {
    search
  }
});

export const setSelectedMovie = movie => ({
  type: actionType.SET_SELECTED_MOVIE,
  payload: movie
})

export const addMovieAction = movie => ({
  type: actionType.ADD_MOVIE,
  payload: movie.data
})

export const updateMovieAction = movie => ({
  type: actionType.UPDATE_MOVIE,
  payload: movie.data
})

export const deleteMovieAction = id => ({
  type: actionType.DELETE_MOVIE,
  payload: id
})

const setMovies = movies => ({
  type: actionType.SET_MOVIES,
  payload: {
    movies
  }
})
