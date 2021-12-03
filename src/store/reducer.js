import actionType from './actionType';

const initial = {
  processing: false,
  error: null,
  movies: [],
  sort: 'release_date',
  sortOrder: 'desc',
  filter: '',
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
        processing: true,
        movies: action.payload.movies
      }
    case actionType.SET_SORT:
      return {
        ...state,
        sort: action.payload.sortBy
      }
    case actionType.SET_SORT_ORDER:
      return {
        ...state,
        sortOrder: action.payload.sortOrder
      }
    case actionType.SET_FILTER:
      return {
        ...state,
        filter: action.payload.filter
      }
    default:
      return state
  }
}

export default reducer;
