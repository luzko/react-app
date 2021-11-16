import React from "react";
import style from './MovieCard.module.css';
import PropTypes from "prop-types";

const MovieCard = ({movie}) => {
  return (
      <div className={style.card}>
        <img className={style.image} src={movie.poster} alt={movie.title}/>
        <div className={style.name}>
          <div>{movie.title}</div>
          <div>{movie.year}</div>
        </div>
        <div className={style.genres}>{movie.genres.join(', ')}</div>
      </div>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string.isRequired)
  }).isRequired
};

export default MovieCard;
