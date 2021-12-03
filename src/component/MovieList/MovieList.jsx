import React from 'react';
import style from './MovieList.module.css';
import MovieCard from "../MovieCard";
import {useSelector} from 'react-redux';

const MovieList = (props) => {
  const movies = useSelector((state) => state.movies);

  return (
      <div className={style.movieList}>
        {movies.map(movie =>
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
