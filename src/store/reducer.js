import actionType from './actionType';

const initial = {
  processing: false,
  error: null,
  movies: [],
  filterSort: {
    sortBy: 'release_date',
    sortOrder: 'desc',
    filter: ''
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
    default:
      return state
  }
}

export default reducer;
