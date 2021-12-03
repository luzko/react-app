import React, {useEffect} from 'react';
import {useToggleOverview} from "../../hook/useToggleOverview";
import Header from "../Header";
import MovieOverview from "../MovieOverview";
import MovieList from '../MovieList';
import SortBy from '../Sort';
import Count from '../Count';
import Footer from "../Footer";
import ErrorBoundary from "../ErrorBoundary";
import style from './App.module.css';
import {useDispatch} from 'react-redux';
import {getMovies, moviesProcessing} from '../../store/actions';

const App = () => {
  const [movieOverview, setMovieOverview] = useToggleOverview()

  function fetchMovies() {
    return (dispatch) => {
      dispatch(moviesProcessing());
      dispatch(getMovies());
    };
  }

  const useFetching = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchMovies());
    }, []);
  };

  useFetching();

  return (
      <ErrorBoundary>
        {movieOverview ? (
            <MovieOverview
                movie={movieOverview}
                setMovieOverview={setMovieOverview}
            />
        ) : (
            <Header/>
        )}
        <main className={style.main}>
          <div className={style.filterSort}>

            <SortBy/>
          </div>
          <Count/>
          <MovieList setMovieOverview={setMovieOverview}/>
        </main>
        <Footer/>
      </ErrorBoundary>
  );
}

export default App;
