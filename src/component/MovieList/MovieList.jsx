import React from 'react';
import style from './MovieList.module.css';
import MovieCard from "../MovieCard/MovieCard";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

const MovieList = ({movies}) => {
  return (
      <ErrorBoundary>
        <div className={style.movieList}>
          {movies.map(movie =>
              <MovieCard movie={movie} key={movie.id}/>
          )}
        </div>
      </ErrorBoundary>
  );
};

export default MovieList;
