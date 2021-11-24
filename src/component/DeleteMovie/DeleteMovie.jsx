import React from 'react';
import style from './DeleteMovie.module.css';
import Modal from '../Modal/Modal';

const DeleteMovie = ({showModal, closeModal, movieId, deleteMovie}) => {
  return (
      <Modal
          title="Delete Movie"
          visible={showModal}
          setVisible={() => closeModal()}
      >
        <div className={style.delete}>
          <p>Are you sure you want to delete this movie?</p>
          <div className={style.buttons}>
            <button
                className={style.button}
                onClick={() => deleteMovie(movieId)}
            >
              Confirm
            </button>
          </div>
        </div>
      </Modal>
  );
};

export default DeleteMovie;
