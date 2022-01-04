import actionType from './actionType';

const initial = {
  processing: false,
  error: null,
  movie: null,
  movies: [],
  filterSort: {
    sortBy: 'vote_average',
    sortOrder: 'desc',
    filter: '',
    search: '',
    searchBy: 'title'
  }
};

const reducer = (state = initial, action) => {
  switch (action.type) {
    case actionType.PROCESSING_START:
      return {
        ...state,
        processing: true
      }
    case actionType.PROCESSING_ERROR:
      return {
        ...state,
        processing: false,
        error: action.payload.error
      }
    case actionType.SET_MOVIES:
      return {
        ...state,
        processing: false,
        error: null,
        movies: action.payload.movies
      }
    case actionType.SET_SELECTED_MOVIE:
      return {
        ...state,
        processing: false,
        error: null,
        movie: action.payload
      }
    case actionType.SET_SORT:
      return {
        ...state,
        processing: true,
        error: null,
        filterSort: {
          ...state.filterSort,
          sortBy: action.payload.sortBy
        }
      };
    case actionType.SET_SORT_ORDER:
      return {
        ...state,
        processing: true,
        error: null,
        filterSort: {
          ...state.filterSort,
          sortOrder: action.payload.sortOrder
        }
      }
    case actionType.SET_FILTER:
      return {
        ...state,
        processing: true,
        error: null,
        filterSort: {
          ...state.filterSort,
          filter: action.payload.filter
        }
      }
    case actionType.ADD_MOVIE:
      return {
        ...state,
        processing: false,
        error: null,
        movies: [...state.movies, action.payload]
      }
    case actionType.UPDATE_MOVIE:
      return {
        ...state,
        processing: false,
        error: null,
        movies: state.movies.map(currentMovie => currentMovie.id === action.payload.id ? action.payload : currentMovie)
      }
    case actionType.DELETE_MOVIE:
      return {
        ...state,
        processing: false,
        error: null,
        movies: state.movies.filter(movie => movie.id !== action.payload)
      }
    case actionType.SET_SEARCH:
      return {
        ...state,
        processing: true,
        error: null,
        filterSort: {
          ...state.filterSort,
          search: action.payload.search
        }
      }
    default:
      return state
  }
}

export default reducer;
