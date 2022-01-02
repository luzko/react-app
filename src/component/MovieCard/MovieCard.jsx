import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import style from './MovieCard.module.css';
import PropTypes from "prop-types";
import MovieModal from '../MovieModal';
import DeleteMovie from '../DeleteMovie';
import MovieOptions from '../MovieOptions';

const MovieCard = (props) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showOption, setShowOption] = useState(false)
  const closeEditModal = () => setShowEditModal(false);
  const closeDeleteModal = () => setShowDeleteModal(false);
  const openEditModal = () => setShowEditModal(true);
  const openDeleteModal = () => setShowDeleteModal(true);
  const closeOption = () => setShowOption(false)
  const openOption = () => setShowOption(true)

  return (
      <>
        <div className={style.card}>
          <div className={style.container}>
            <Link to={`/film/${props.movie.id}`}>
              <img
                  className={style.image}
                  src={props.movie.poster_path}
                  alt={props.movie.title}
              />
            </Link>
            <button
                className={style.button}
                onClick={openOption}
            >
              ...
            </button>
          </div>
          <div className={style.name}>
            <div>{props.movie.title}</div>
            <div>{props.movie.release_date.split('-')[0]}</div>
          </div>
          <div className={style.genres}>{props.movie.genres.join(', ')}</div>
          <div className={style.options}>
            <MovieOptions
                show={showOption}
                close={closeOption}
                openEditModal={openEditModal}
                openDeleteModal={openDeleteModal}
            />
          </div>
        </div>
        <DeleteMovie
            showModal={showDeleteModal}
            closeModal={closeDeleteModal}
            deleteMovie={props.deleteMovie}
            movieId={props.movie.id}
        />
        <MovieModal
            showModal={showEditModal}
            closeModal={closeEditModal}
            updateMovie={props.updateMovie}
            movie={props.movie}
        />
      </>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    vote_count: PropTypes.number.isRequired,
    release_date: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    budget: PropTypes.number.isRequired,
    revenue: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string.isRequired),
    runtime: PropTypes.number.isRequired,
  }).isRequired
};

export default MovieCard;
