import React from 'react';
import style from './MovieModal.module.css';
import Modal from '../Modal';
import SelectGenre from '../SelectGenre';
import {useFormik} from 'formik';

const MovieModal = (props) => {
  const isEdit = !!props.movie

  const validate = (values) => {
    const errors = {};
    if (!values.title) {
      errors.title = 'Please enter a title';
    }
    if (!values.tagline) {
      errors.tagline = 'Please enter a tagline';
    }
    if (!values.release) {
      errors.release = 'Please select a reelase date';
    }
    if (!values.poster) {
      errors.poster = 'Please enter a poster url';
    } else if (!/^(https?):\/\/[^\s$.?#].[^\s]*$/i.test(values.poster)) {
      errors.poster =
          'Not a valid http link, please enter a valid http link';
    }
    if (!values.rating) {
      errors.rating = 'Please enter a rating';
    } else if (!/\d+$/i.test(values.rating)) {
      errors.rating = 'Please enter a number';
    }
    if (!values.genre.length === 0) {
      errors.genres = 'Please select at least one genre';
    }
    if (!values.runtime) {
      errors.runtime = 'Please enter a runtime';
    } else if (!/\d+$/i.test(values.runtime)) {
      errors.runtime = 'Please enter a number';
    }
    if (!values.overview) {
      errors.overview = 'Please enter an overview';
    }
    return errors;
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: isEdit ? props.movie.title : '',
      tagline: isEdit ? props.movie.tagline : '',
      release: isEdit ? props.movie.release_date : '',
      poster: isEdit ? props.movie.poster_path : '',
      rating: isEdit ? props.movie.vote_average : '',
      genre: isEdit ? props.movie.genres : [],
      runtime: isEdit ? props.movie.runtime : '',
      overview: isEdit ? props.movie.overview : ''
    },
    validate,
    onSubmit: (values) => {
      if (isEdit) {
        const updatedMovie = {
          id: props.movie.id,
          title: values.title,
          tagline: values.tagline,
          release_date: values.release,
          poster_path: values.poster,
          vote_average: Number(values.rating),
          genres: values.genre,
          runtime: Number(values.runtime),
          overview: values.overview
        };
        props.updateMovie(updatedMovie)
      } else {
        const newMovie = {
          title: values.title,
          tagline: values.tagline,
          release_date: values.release,
          poster_path: values.poster,
          vote_average: Number(values.rating),
          genres: values.genre,
          runtime: Number(values.runtime),
          overview: values.overview
        };
        props.createMovie(newMovie)
      }
      close();
    }
  });

  const close = () => {
    props.closeModal()
    formik.resetForm();
  };

  const addRedBorder = (field) => {
    const rootClasses = [style.input]
    rootClasses.push(formik.touched[field] && formik.errors[field] ? style.redBorder : '')
    return rootClasses;
  }

  return (
      <Modal title={isEdit ? 'EDIT MOVIE' : 'ADD MOVIE'}
             visible={props.showModal}
             setVisible={() => props.closeModal()}
      >
        <form onSubmit={formik.handleSubmit}>
          <div className={style.field}>
            <label>TITLE</label>
            <input
                type='text'
                className={addRedBorder('title').join(' ')}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.title}
                id='title'
                name='title'
            />
            {formik.touched.title && formik.errors.title ? (
                <span className={style.error}>{formik.errors.title}</span>
            ) : null}
          </div>
          <div className={style.field}>
            <label>TAGLINE</label>
            <input
                type='text'
                className={addRedBorder('tagline').join(' ')}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.tagline}
                id='tagline'
                name='tagline'
            />
            {formik.touched.tagline && formik.errors.tagline ? (
                <span className={style.error}>{formik.errors.tagline}</span>
            ) : null}
          </div>
          <div className={style.field}>
            <label>RELEASE DATE</label>
            <input
                type='date'
                className={addRedBorder('release').join(' ')}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.release}
                id='release'
                name='release'
            />
            {formik.touched.release && formik.errors.release ? (
                <span className={style.error}>{formik.errors.release}</span>
            ) : null}
          </div>
          <div className={style.field}>
            <label>POSTER</label>
            <input
                type='text'
                className={addRedBorder('poster').join(' ')}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.poster}
                id='poster'
                name='poster'
            />
            {formik.touched.poster && formik.errors.poster ? (
                <span className={style.error}>{formik.errors.poster}</span>
            ) : null}
          </div>
          <div className={style.field}>
            <label>RATING</label>
            <input
                type='text'
                className={addRedBorder('rating').join(' ')}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.rating}
                id='rating'
                name='rating'
            />
            {formik.touched.rating && formik.errors.rating ? (
                <span className={style.error}>{formik.errors.rating}</span>
            ) : null}
          </div>
          <div className={style.field}>
            <label>GENRES</label>
            <input
                type='text'
                className={addRedBorder('genre').join(' ')}
                onBlur={formik.handleBlur}
                value={formik.values.genre}
                disabled={true}
                id='genre'
                name='genre'
            />
            {formik.touched.genre && formik.errors.genre ? (
                <span className={style.error}>{formik.errors.genre}</span>
            ) : null}
            <SelectGenre genre={formik.values.genre} changeGenre={formik.handleChange}/>
          </div>
          <div className={style.field}>
            <label>RUNTIME</label>
            <input
                type='text'
                className={addRedBorder('runtime').join(' ')}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.runtime}
                id='runtime'
                name='runtime'
            />
            {formik.touched.runtime && formik.errors.runtime ? (
                <span className={style.error}>{formik.errors.runtime}</span>
            ) : null}
          </div>
          <div className={style.field}>
            <label>OVERVIEW</label>
            <textarea
                className={addRedBorder('overview').join(' ')}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.overview}
                id='overview'
                name='overview'
            />
            {formik.touched.overview && formik.errors.overview ? (
                <span className={style.error}>{formik.errors.overview}</span>
            ) : null}
          </div>
          <div className={style.buttons}>
            <button className={style.button} onClick={formik.handleReset}>
              RESET
            </button>
            <button className={style.button} type='submit'>
              SUBMIT
            </button>
          </div>
        </form>
      </Modal>
  )
};

export default MovieModal;
