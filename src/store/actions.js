import actionType from './actionType';
import {
  filter,
  deleteApi,
  getApi,
  getMovieById,
  postApi,
  updateApi
} from '../service/apiService';
import {all, call, put} from "redux-saga/effects";

export function* rootSaga() {
  yield all([
    moviesSaga(),
  ]);
}

function* moviesSaga() {
  yield all([
    fetchMovies()
  ]);
}

function* fetchMovies() {
  const response = yield call(fetch, filter);
  const movies = yield response.json();
  yield put(setMovies(movies));
}

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

export const getMoviesByParam = (genre, sortBy, sortOrder, searchQuery) => (dispatch) => {
  let filterSort = {
    sortBy: sortBy,
    sortOrder: sortOrder,
    filter: genre === 'all' ? '' : genre,
    search: searchQuery,
    searchBy: 'title'
  }
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
