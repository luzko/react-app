import React, {useState} from 'react';
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
            <img
                className={style.image}
                src={props.movie.poster}
                alt={props.movie.title}
            />
            <button
                className={style.button}
                onClick={openOption}
            >
              ...
            </button>
          </div>
          <div className={style.name}>
            <div>{props.movie.title}</div>
            <div>{props.movie.release}</div>
          </div>
          <div className={style.genres}>{props.movie.genre.join(', ')}</div>
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
            movieId={props.movie.id}
            deleteMovie={props.deleteMovie}
        />
        <MovieModal
            showModal={showEditModal}
            closeModal={closeEditModal}
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
