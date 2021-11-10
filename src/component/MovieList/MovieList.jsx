import React from 'react';
import style from './MovieList.module.css';
import MovieCard from "../MovieCard/MovieCard";

const MovieList = ({movies}) => {
  return (
      <div className={style.movieList}>
        {movies.map(movie =>
            <MovieCard movie={movie} key={movie.id}/>
        )}
      </div>
  );
};

export default MovieList;
