import React, {useCallback, useEffect, useState} from 'react';
import {mockMovies} from '../../data/mock-data';
import {genres, sort} from '../../data/data';
import {useSortedMovies} from "../../hook/useSortedMovies";
import {useToggleOverview} from "../../hook/useToggleOverview";
import Header from "../Header";
import MovieOverview from "../MovieOverview";
import MovieList from '../MovieList';
import FilterGenre from '../FilterGenre';
import SortBy from '../Sort';
import Count from '../Count';
import Footer from "../Footer";
import ErrorBoundary from "../ErrorBoundary";
import style from './App.module.css';

const App = () => {
  const [movieList, setMovieList] = useState([])
  const [sortBy, setSortBy] = useState({field: 'RELEASE DATE', direction: 'asc'})
  const [movieOverview, setMovieOverview] = useToggleOverview()

  useEffect(() => {
    setMovieList(mockMovies)
  }, [])

  const changeSort = useCallback((field) => {
    const direction = sortBy.direction
    setSortBy({field, direction})
  }, [sortBy])

  const changeOrder = useCallback((order) => {
    const field = sortBy.field
    const direction = order === 'asc' ? 'desc' : 'asc'
    setSortBy({field, direction})
  }, [sortBy])

  const addMovie = useCallback((movie) => {
    setMovieList([...movieList, movie])
  }, [movieList])

  const deleteMovie = useCallback((id) => {
    setMovieList(movieList.filter((movie) => movie.id !== id))
  }, [movieList])

  const updateMovie = useCallback((movie) => {
    let movies = movieList
    const movieIndex = movies.findIndex((x) => x.id === movie.id)
    movies[movieIndex] = movie
    setMovieList([...movies])
  }, [movieList])

  const movies = useSortedMovies(movieList, sortBy);

  return (
      <ErrorBoundary>
        {movieOverview ? (
            <MovieOverview
                movie={movieOverview}
                setMovieOverview={setMovieOverview}
            />
        ) : (
            <Header addMovie={addMovie}/>
        )}
        <main className={style.main}>
          <div className={style.filterSort}>
            <FilterGenre genres={genres}/>
            <SortBy
                sortBy={sortBy}
                changeSort={changeSort}
                changeOrder={changeOrder}
                options={sort.fields}
            />
          </div>
          <Count count={movies.length}/>
          <MovieList
              movies={movies}
              updateMovie={updateMovie}
              deleteMovie={deleteMovie}
              setMovieOverview={setMovieOverview}
          />
        </main>
        <Footer/>
      </ErrorBoundary>
  );
}

export default App;
