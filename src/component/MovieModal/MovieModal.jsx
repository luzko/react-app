import React, { useState } from 'react';
import style from './MovieModal.module.css';
import Modal from '../Modal';

const MovieModal = (props) => {
  const isEdit = props.movie ? true : false
  const [title, setTitle] = useState(isEdit ? props.movie.title : '')
  const [release, setRelease] = useState(isEdit ? props.movie.release : '')
  const [poster, setPoster] = useState(isEdit ? props.movie.poster : '')
  const [rating, setRating] = useState(isEdit ? props.movie.rating : '')
  const [genre, setGenre] = useState(isEdit ? props.movie.genre : '')
  const [runtime, setRuntime] = useState(isEdit ? props.movie.runtime : '')
  const [overview, setOverview] = useState(isEdit ? props.movie.overview : '')

  const resetField = () => {
    setTitle(isEdit ? props.movie.title : '')
    setRelease(isEdit ? props.movie.release : '')
    setPoster(isEdit ? props.movie.poster : '')
    setRating(isEdit ? props.movie.rating : '')
    setGenre(isEdit ? props.movie.genre : [])
    setRuntime(isEdit ? props.movie.runtime : '')
    setOverview(isEdit ? props.movie.overview : '')
  }

  const submit = () => {
    const movie = {
      id: isEdit ? props.movie.id : Date.now(),
      title,
      release,
      poster,
      rating,
      genre,
      runtime,
      overview
    }
    isEdit ? props.updateMovie(movie) : props.addMovie(movie)
    props.closeModal()
    resetField()
  }

  return (
      <Modal title={isEdit ? 'EDIT MOVIE' : 'ADD MOVIE'}
             visible={props.showModal}
             setVisible={() => props.closeModal()}
      >
        <div className={style.field}>
          <label>TITLE</label>
          <input
              type='text'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={style.field}>
          <label>RELEASE DATE</label>
          <input
              type='date'
              value={release}
              onChange={(e) => setRelease(e.target.value)}
          />
        </div>
        <div className={style.field}>
          <label>POSTER</label>
          <input
              type='text'
              value={poster}
              onChange={(e) => setPoster(e.target.value)}
          />
        </div>
        <div className={style.field}>
          <label>RATING</label>
          <input
              type='text'
              value={rating}
              onChange={(e) => setRating(e.target.value)}
          />
        </div>
        <div className={style.field}>
          <label>GENRES</label>
          <input
              type='text'
              value={genre}
              onChange={(e) => setGenre(
                  e.target.value.replaceAll(', ').split(',')
              )
              }
          />
        </div>
        <div className={style.field}>
          <label>RUNTIME</label>
          <input
              type='text'
              value={runtime}
              onChange={(e) => setRuntime(e.target.value)}
          />
        </div>
        <div className={style.field}>
          <label>OVERVIEW</label>
          <textarea
              type='text'
              value={overview}
              onChange={(e) => setOverview(e.target.value)}
          />
        </div>
        <div className={style.buttons}>
          <button className={style.button} onClick={resetField}>
            RESET
          </button>
          <button className={style.button} onClick={submit}>
            SUBMIT
          </button>
        </div>
      </Modal>
  )
};

export default MovieModal;
