import React, {useEffect} from "react";
import {connect} from 'react-redux';
import style from './App.module.css';
import {useToggleOverview} from "../../hook/useToggleOverview";
import ErrorBoundary from "../ErrorBoundary";
import Header from "../Header";
import MovieOverview from "../MovieOverview";
import MovieList from '../MovieList';
import FilterGenre from '../FilterGenre';
import SortBy from '../Sort';
import Count from '../Count';
import Loader from "../Loader";
import Footer from "../Footer";
import {
  createMovie,
  deleteMovie,
  getMovies,
  moviesProcessing,
  updateMovie
} from '../../store/actions';

const App = ({
  isLoad,
  error,
  movies,
  processing,
  fetchMovies,
  deleteMovie,
  createMovie,
  updateMovie
}) => {
  const [movieOverview, setMovieOverview] = useToggleOverview()

  useEffect(() => {
    processing();
    fetchMovies();
  }, []);

  return (
      <ErrorBoundary>
        {movieOverview ? (
            <MovieOverview
                movie={movieOverview}
                setMovieOverview={setMovieOverview}
            />
        ) : (
            <Header createMovie={createMovie}/>
        )}
        <main className={style.main}>
          <div className={style.filterSort}>
            <FilterGenre/>
            <SortBy/>
          </div>
          {isLoad
              ? <Loader/>
              : error
                  ? <div className={style.error}>{error.toString()}</div>
                  : <>
                    <Count count={movies.length}/>
                    <MovieList
                        movies={movies}
                        deleteMovie={deleteMovie}
                        updateMovie={updateMovie}
                        setMovieOverview={setMovieOverview}
                    />
                  </>
          }
        </main>
        <Footer/>
      </ErrorBoundary>
  );
}

const mapStateToProps = (state) => ({
  isLoad: state.processing,
  error: state.error,
  movies: state.movies
});

const mapDispatchToProps = {
  processing: moviesProcessing,
  fetchMovies: getMovies,
  deleteMovie,
  createMovie,
  updateMovie
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
