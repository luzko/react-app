import React from 'react';
import style from './MovieOverview.module.css';
import PropTypes from 'prop-types';
import logo from '../../../public/logo.svg';
import {useNavigate, useParams, useSearchParams} from "react-router-dom";

const MovieOverview = (props) => {
  let navigate = useNavigate();
  let [searchParams] = useSearchParams();
  let {searchQuery} = useParams();

  const hide = () => {
    searchParams.delete('movie');
    navigate(`/search${searchQuery ? '/' + searchQuery : '/'}?${searchParams.toString()}`)
  }

  return (
      <>
        <div className={style.overview}>
          <div className={style.logoAndButton}>
            <img src={logo} alt='logo' className={style.logo}/>
            <i className={style.icon}
               onClick={hide}>
              ✕
            </i>
          </div>
          <div className={style.movieDetails}>
            <div className={style.card}>
              <img
                  className={style.image}
                  src={props.movie.poster_path}
                  alt={props.movie.title}
              />
            </div>
            <div className={style.text}>
              <div className={style.nameRating}>
                <span className={style.title}>{props.movie.title}</span>
                <span className={style.rating}>{props.movie.vote_average}</span>
              </div>
              <span className={style.overviewText}>{props.movie.tagline}</span>
              <div className={style.date}>
                <span>{props.movie.release_date.split('-')[0]}</span>
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
    vote_average: PropTypes.number.isRequired,
    vote_count: PropTypes.number.isRequired,
    release_date: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    budget: PropTypes.number.isRequired,
    revenue: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string.isRequired),
    runtime: PropTypes.number.isRequired,
  }).isRequired
};

export default MovieOverview;
