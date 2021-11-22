import React, { useState } from 'react';
import style from './MovieCard.module.css';
import PropTypes from "prop-types";
import MovieModal from '../MovieModal';

const MovieCard = (props) => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);

  const showEditMovieModal = () => setShowModal(true);

  return (
      <>
        <div className={style.card}>
          <div className={style.container}>
            <img
                className={style.image}
                src={props.movie.poster}
                alt={props.movie.title}
            />
            <button
                className={style.edit}
                onClick={showEditMovieModal}
            >
              edit
            </button>
            <button
                className={style.remove}
                onClick={() => props.deleteMovie(props.movie.id)}
            >
              remove
            </button>
          </div>
          <div className={style.name}>
            <div>{props.movie.title}</div>
            <div>{props.movie.release}</div>
          </div>
          <div className={style.genres}>{props.movie.genre.join(', ')}</div>
        </div>
        <MovieModal
            showModal={showModal}
            closeModal={closeModal}
            movie={props.movie}
            updateMovie={props.updateMovie}
        />
      </>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    release: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    genre: PropTypes.arrayOf(PropTypes.string.isRequired),
    url: PropTypes.string.isRequired,
    runtime: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
  }).isRequired
};

export default MovieCard;
