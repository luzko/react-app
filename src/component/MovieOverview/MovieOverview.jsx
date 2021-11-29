import React from 'react';
import style from './MovieOverview.module.css';
import PropTypes from 'prop-types';
import logo from '../../../public/logo.svg';

const MovieOverview = (props) => {
  return (
      <>
        <div className={style.overview}>
          <div className={style.logoAndButton}>
            <img src={logo} alt='logo' className={style.logo}/>
            <i className={style.icon} onClick={() => props.setMovieOverview(null)}>
              🔎
            </i>
          </div>
          <div className={style.movieDetails}>
            <div className={style.card}>
              <img
                  className={style.image}
                  src={props.movie.poster}
                  alt={props.movie.title}
              />
            </div>
            <div className={style.text}>
              <div className={style.nameRating}>
                <span className={style.title}>{props.movie.title}</span>
                <span className={style.rating}>{props.movie.rating}</span>
              </div>
              <span className={style.overviewText}>{props.movie.tagline}</span>
              <div className={style.date}>
                <span>{props.movie.release.split('-')[0]}</span>
                <span>{props.movie.runtime} min</span>
              </div>
              <span className={style.overviewText}>{props.movie.overview}</span>
            </div>
          </div>
        </div>
      </>
  );
}

MovieOverview.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    release: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    genre: PropTypes.arrayOf(PropTypes.string.isRequired),
    poster: PropTypes.string.isRequired,
    runtime: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
  }).isRequired
};

export default MovieOverview;
