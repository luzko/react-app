import React, {useEffect, useState} from 'react';
import style from './MovieModal.module.css';
import Modal from '../Modal';
import SelectGenre from '../SelectGenre';

const MovieModal = (props) => {
  const isEdit = props.movie ? true : false
  const [title, setTitle] = useState(isEdit ? props.movie.title : '')
  const [tagline, setTagline] = useState(isEdit ? props.movie.tagline : '')
  const [release, setRelease] = useState(isEdit ? props.movie.release_date : '')
  const [poster, setPoster] = useState(isEdit ? props.movie.poster_path : '')
  const [rating, setRating] = useState(isEdit ? props.movie.vote_average : '')
  const [genre, setGenre] = useState(isEdit ? props.movie.genres : [])
  const [runtime, setRuntime] = useState(isEdit ? props.movie.runtime : '')
  const [overview, setOverview] = useState(isEdit ? props.movie.overview : '')

  useEffect(() => {
  }, [])

  const resetField = () => {
    setTitle(isEdit ? title : '')
    setTagline(isEdit ? tagline : '')
    setRelease(isEdit ? release : '')
    setPoster(isEdit ? poster : '')
    setRating(isEdit ? rating : '')
    setGenre(isEdit ? genre : [])
    setRuntime(isEdit ? runtime : '')
    setOverview(isEdit ? overview : '')
  }

  const reset = () => {
    setTitle(isEdit ? props.movie.title : '')
    setTagline(isEdit ? props.movie.tagline : '')
    setRelease(isEdit ? props.movie.release_date : '')
    setPoster(isEdit ? props.movie.poster_path : '')
    setRating(isEdit ? props.movie.vote_average : '')
    setGenre(isEdit ? props.movie.genres : [])
    setRuntime(isEdit ? props.movie.runtime : '')
    setOverview(isEdit ? props.movie.overview : '')
  }

  const submit = () => {
    const movie = {
      id: isEdit ? props.movie.id : Date.now(),
      tagline,
      title,
      release,
      poster,
      rating,
      genre,
      runtime,
      overview
    }
    // isEdit ? props.updateMovie(movie) : props.addMovie(movie)
    props.closeModal()
    resetField()
  }

  const changeGenre = (event) => {
    setGenre(genre?.indexOf(event.target?.value) > -1
        ? genre.filter(genre => genre !== event.target?.value)
        : [...genre, event.target?.value])
  }

  return (
      <Modal title={isEdit ? 'EDIT MOVIE' : 'ADD MOVIE'}
             visible={props.showModal}
             setVisible={() => props.closeModal()}
      >
        <div className={style.field}>
          <label>TITLE</label>
          <input
              className={style.input}
              type='text'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={style.field}>
          <label>TAGLINE</label>
          <input
              className={style.input}
              type='text'
              value={tagline}
              onChange={(e) => setTagline(e.target.value)}
          />
        </div>
        <div className={style.field}>
          <label>RELEASE DATE</label>
          <input
              className={style.input}
              type='date'
              value={release}
              onChange={(e) => setRelease(e.target.value)}
          />
        </div>
        <div className={style.field}>
          <label>POSTER</label>
          <input
              className={style.input}
              type='text'
              value={poster}
              onChange={(e) => setPoster(e.target.value)}
          />
        </div>
        <div className={style.field}>
          <label>RATING</label>
          <input
              className={style.input}
              type='text'
              value={rating}
              onChange={(e) => setRating(e.target.value)}
          />
        </div>
        <div className={style.field}>
          <label>GENRES</label>
          <input
              className={style.input}
              type='text'
              value={genre}
              disabled={true}
          />
          <SelectGenre genre={genre} changeGenre={changeGenre}/>
        </div>
        <div className={style.field}>
          <label>RUNTIME</label>
          <input
              className={style.input}
              type='text'
              value={runtime}
              onChange={(e) => setRuntime(e.target.value)}
          />
        </div>
        <div className={style.field}>
          <label>OVERVIEW</label>
          <textarea
              className={style.input}
              type='text'
              value={overview}
              onChange={(e) => setOverview(e.target.value)}
          />
        </div>
        <div className={style.buttons}>
          <button className={style.button} onClick={reset}>
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
