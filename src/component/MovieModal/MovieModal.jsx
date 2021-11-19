import React from 'react';
import style from './MovieModal.module.css';
import Modal from '../Modal';
import {fields, genreOptions} from '../../data/data';

class MovieModal extends React.Component {
  render() {
    const {show, action, isEdit, movie} = this.props;

    return (
        <Modal title={isEdit ? 'EDIT MOVIE' : 'ADD MOVIE'}
               visible={show}
               setVisible={() => action()}
        >
          {fields.map((field) => (field.type === 'select' ? (
              <div className={style.field}>
                <label>{field.label}</label>
                <select multiple size={1} className={style.select}>
                  {genreOptions.map((option) => (
                      <option key={option.id} value={option.value}>
                        {option.label.toUpperCase()}
                      </option>
                  ))}
                </select>
              </div>
          ) : (
              <div className={style.field}>
                <label>{field.label}</label>
                {field.type === 'textarea' ? (
                    <textarea
                        value={isEdit && movie ? movie[field.key] : ''}
                    />
                ) : (
                    <input
                        type={field.type}
                        value={isEdit && movie ? movie[field.key] : ''}
                    />
                )}
              </div>
          )))}
          <div className={style.buttons}>
            <button className={style.button}>
              RESET
            </button>
            <button className={style.button}>
              {isEdit ? 'SAVE' : 'SUBMIT'}
            </button>
          </div>
        </Modal>
    );
  }
}

export default MovieModal;
