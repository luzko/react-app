import React from "react";
import style from './MovieCard.module.css';
import PropTypes from "prop-types";
import MovieOptions from '../MovieOptions';

class MovieCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showOptions: false};
  }

  optionAction = (action) => {
    const {options, movie} = this.props;
    options(action, movie.id);
    this.setState({showOptions: false});
  }

  toggleOption = () => {
    this.setState((prevState) => ({showOptions: !prevState.showOptions}));
  }

  render() {
    const {movie} = this.props;
    return (
        <>
          <div className={style.card}>
            <div className={style.container}>
              <img
                  className={style.image}
                  src={movie.poster}
                  alt={movie.title}
              />
              <button
                  className={style.button}
                  onClick={this.toggleOption}
              >
                ...
              </button>
            </div>
            <div className={style.name}>
              <div>{movie.title}</div>
              <div>{movie.release}</div>
            </div>
            <div className={style.genres}>{movie.genre.join(', ')}</div>
            <div className={style.options}>
              <MovieOptions
                  show={this.state.showOptions}
                  action={this.optionAction}
              />
            </div>
          </div>
        </>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    release: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    genre: PropTypes.arrayOf(PropTypes.string.isRequired),
    url: PropTypes.string.isRequired,
    runtime: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
  }).isRequired
};

export default MovieCard;
