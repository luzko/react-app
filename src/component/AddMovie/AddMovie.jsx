import React, {useState} from 'react';
import style from './AddMovie.module.css';
import MovieModal from '../MovieModal/MovieModal';

const AddMovie = ({createMovie}) => {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);

  return (
      <>
        <button className={style.addButton} onClick={openModal}>
          + ADD MOVIE
        </button>
        <MovieModal
            createMovie={createMovie}
            showModal={showModal}
            closeModal={closeModal}
        />
      </>
  );
};

export default AddMovie;
