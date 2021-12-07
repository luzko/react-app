import React from 'react';
import style from './MovieList.module.css';
import MovieCard from "../MovieCard";

const MovieList = (props) => {
  return (
      <div className={style.movieList}>
        {props.movies.map(movie =>
            <MovieCard
                key={movie.id}
                movie={movie}
                setMovieOverview={props.setMovieOverview}
            />
        )}
      </div>
  );
}

export default MovieList;
