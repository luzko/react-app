import React from 'react';
import style from './DeleteMovie.module.scss';
import Modal from '../Modal/Modal';

const DeleteMovie = ({show, action, movieId}) => {
  return (
      <Modal
          title="Delete Movie"
          onClose={() => action('close')}
          visible={show}
      >
        <div className={style.deleteMovie}>
          <p>Are you sure you want to delete this movie?</p>
          <button onClick={() => onAction('confirm', movieId)}>Confirm</button>
        </div>
      </Modal>
  );
};

export default DeleteMovie;
