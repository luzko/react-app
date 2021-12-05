import React, {useEffect} from 'react';
import {useToggleOverview} from "../../hook/useToggleOverview";
import Header from "../Header";
import MovieOverview from "../MovieOverview";
import MovieList from '../MovieList';
import SortBy from '../Sort';
import FilterGenre from '../FilterGenre';
import Count from '../Count';
import Footer from "../Footer";
import ErrorBoundary from "../ErrorBoundary";
import Loader from "../Loader";
import style from './App.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {getMovies, moviesProcessing} from '../../store/actions';

const App = () => {
  const [movieOverview, setMovieOverview] = useToggleOverview()
  const processing = useSelector((state) => state.processing);
  const error = useSelector((state) => state.error);

  const useFetch = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch((dispatch) => {
        dispatch(moviesProcessing());
        dispatch(getMovies());
      });
    }, []);
  };

  useFetch();

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
            <FilterGenre/>
            <SortBy/>
          </div>
          {processing
              ? <Loader/>
              : error
                  ? <div className={style.error}>{error.toString()}</div>
                  : <>
                    <Count/>
                    <MovieList setMovieOverview={setMovieOverview}/>
                  </>
          }
        </main>
        <Footer/>
      </ErrorBoundary>
  );
}

export default App;
