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
    default:
      return state
  }
}

export default reducer;
