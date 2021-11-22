import React, { useState } from 'react';
import style from './MovieList.module.css';
import MovieCard from "../MovieCard";
import DeleteMovie from "../DeleteMovie";
import MovieModal from "../MovieModal";

const MovieList = (props) => {
  return (
      <div className={style.movieList}>
        {props.movies.map(movie =>
            <MovieCard
                key={movie.id}
                movie={movie}
                deleteMovie={props.deleteMovie}
                updateMovie={props.updateMovie}
            />
        )}
      </div>
  );
}

export default MovieList;
