import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {connect} from "react-redux";
import ErrorBoundary from "../ErrorBoundary";
import Footer from "../Footer";
import SearchView from '../SearchView';
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
        <Routes>
          <Route path="/" element={<Navigate to="search"/>}/>
          {['/search/', '/search/:searchQuery/'].map(path =>
              <Route path={path} element={
                <SearchView
                    movie={movie}
                    findMovieById={findMovieById}
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
              }/>)}
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
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
  deleteMovie: (id) => dispatch(deleteMovie(id)),
  createMovie: (movie) => dispatch(createMovie(movie)),
  updateMovie: (movie) => dispatch(updateMovie(movie)),
  setSearch: (search) => dispatch(setSearch(search))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
