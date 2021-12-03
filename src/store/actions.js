import actionType from './actionType';
import axios from 'axios';
import store from './store';

export const getMovies = () => 
  dispatch =>
      axios.get('http://localhost:4000/movies', {
        params: {
          filter: store.getState().filer,
          sortBy: store.getState().sort,
          sortOrder: store.getState().sortOrder,
        },
      })
      .then(response => {
        dispatch(setMovies(response.data.data));
      })
      .catch(error => {
        dispatch(errorProcessing(error));
      });



export const moviesProcessing = () => ({
  type: actionType.PROCESSING_START
});

export const errorProcessing = error => ({
  type: actionType.PROCESSING_ERROR,
  payload: {
    error
  }
});

export const setMovies = movies => ({
  type: actionType.SET_MOVIES,
  payload: {
    movies
  }
})

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

export const setFilter = genre => ({
  type: actionType.SET_FILTER,
  payload: {
    genre
  }
});
