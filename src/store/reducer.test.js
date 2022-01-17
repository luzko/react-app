import reducer from './reducer';
import actionType from "./actionType";

describe('reducer', () => {
  it('returns the initial state for unknown action', () => {
    expect(reducer(undefined, {})).toEqual({
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
    });
  });

  it('handle PROCESSING START', () => {
    const setProcessing = {
      type: actionType.PROCESSING_START,
    };
    expect(reducer({}, setProcessing)).toEqual({processing: true});
  });

  it('handle PROCESSING ERROR', () => {
    const setError = {
      type: actionType.PROCESSING_ERROR,
      payload: {error: 'test'}
    };
    expect(reducer({}, setError)).toEqual({
      error: 'test',
      processing: false
    });
  });

  it('handle SET SELECTED MOVIE', () => {
    const setMovie = {
      type: actionType.SET_SELECTED_MOVIE,
      payload: {id: 1}
    };
    expect(reducer({}, setMovie)).toEqual({
      error: null,
      movie: {id: 1},
      processing: false
    });
  });

  it('handle SET MOVIES', () => {
    const setMovies = {
      type: actionType.SET_MOVIES,
      payload: {movies: [{id: 3, title: 'movie 3'}, {id: 4, title: 'movie 4'}]}
    };
    expect(reducer({}, setMovies)).toEqual({
      error: null,
      processing: false,
      movies: [{id: 3, title: 'movie 3'}, {id: 4, title: 'movie 4'}]
    });
  })

  it('handle ADD MOVIE', () => {
    const addMovies = {
      type: actionType.ADD_MOVIE,
      payload: {id: 3, title: 'movie 3'}
    };
    expect(reducer({
      movies: [{id: 1, title: 'movie 1'}, {id: 2, title: 'movie 2'}],
    }, addMovies)).toEqual({
      error: null,
      processing: false,
      movies: [{id: 1, title: 'movie 1'}, {id: 2, title: 'movie 2'}, {id: 3, title: 'movie 3'}]
    });
  })

  it('handle UPDATE MOVIE', () => {
    const updateMovie = {
      type: actionType.UPDATE_MOVIE,
      payload: {id: 1, title: '111'}
    };
    expect(reducer({
      movies: [{id: 1, title: 'movie 1'}, {id: 2, title: 'movie 2'}],
    }, updateMovie)).toEqual({
      error: null,
      processing: false,
      movies: [{id: 1, title: '111'}, {id: 2, title: 'movie 2'}]
    });
  })

  it('handle DELETE MOVIE', () => {
    const deleteMovie = {
      type: actionType.DELETE_MOVIE,
      payload: 1
    };
    expect(reducer({
      movies: [{id: 1, title: 'movie 1'}, {id: 2, title: 'movie 2'}],
    }, deleteMovie)).toEqual({
      error: null,
      processing: false,
      movies: [{id: 2, title: 'movie 2'}]
    });
  })
});
