import React from 'react';
import style from './DeleteMovie.module.css';
import Modal from '../Modal/Modal';

const DeleteMovie = ({show, action, movieId}) => {
  return (
      <Modal
          title="Delete Movie"
          setVisible={() => action('close')}
          visible={show}
      >
        <div className={style.delete}>
          <p>Are you sure you want to delete this movie?</p>
          <div className={style.buttons}>
            <button
                className={style.button}
                onClick={() => action('confirm', movieId)}
            >
              Confirm
            </button>
          </div>
        </div>
      </Modal>
  );
};

export default DeleteMovie;
