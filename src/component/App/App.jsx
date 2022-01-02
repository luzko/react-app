import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {connect} from "react-redux";
import ErrorBoundary from "../ErrorBoundary";
import Footer from "../Footer";
import SearchView from '../SearchView';
import OverviewView from '../OverviewView';
import PageNotFound from '../PageNotFound';
import {
  createMovie,
  deleteMovie,
  findMovieById,
  getMovies,
  moviesProcessing,
  setSearch,
  updateMovie
} from '../../store/actions';

const App = ({
  isLoad,
  error,
  movies,
  movie,
  processing,
  fetchMovies,
  deleteMovie,
  createMovie,
  findMovieById,
  updateMovie,
  setSearch
}) => {
  return (
      <ErrorBoundary>
        <Switch>
          <Route path={['/', '/search/', '/search/:title']} exact>
            <SearchView
                setSearch={setSearch}
                processing={processing}
                fetchMovies={fetchMovies}
                createMovie={createMovie}
                isLoad={isLoad}
                error={error}
                movies={movies}
                deleteMovie={deleteMovie}
                updateMovie={updateMovie}
            />
          </Route>
          <Route path={'/film/:id'} exact>
            <OverviewView
                movie={movie}
                findMovieById={findMovieById}
                processing={processing}
                fetchMovies={fetchMovies}
                isLoad={isLoad}
                error={error}
                movies={movies}
                deleteMovie={deleteMovie}
                updateMovie={updateMovie}
            />
          </Route>
          <Route path='*'>
            <PageNotFound/>
          </Route>
        </Switch>
        <Footer/>
      </ErrorBoundary>
  );
}

const mapStateToProps = (state) => ({
  isLoad: state.processing,
  error: state.error,
  movies: state.movies,
  movie: state.movie
});

const mapDispatchToProps = (dispatch) => ({
  processing: () => dispatch(moviesProcessing()),
  fetchMovies: () => dispatch(getMovies()),
  findMovieById: (id) => dispatch(findMovieById(id)),
  deleteMovie: () => dispatch(deleteMovie()),
  createMovie: () => dispatch(createMovie()),
  updateMovie: () => dispatch(updateMovie()),
  setSearch: (search) => dispatch(setSearch(search))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
