import React from "react";
import style from './MovieCard.module.css';
import PropTypes from "prop-types";
import MovieOptions from '../MovieOptions';

class MovieCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showOptionsPopup: false};
  }

  optionAction = (action) => {
    const {options, movie: {id}} = this.props;
    options(action, id);
    this.hideOptionsPopup();
  }

  hideOptionsPopup = () => {
    this.setState({showOptionsPopup: false});
  }

  toggleOptionsPopup = () => {
    this.setState(
        (prevState) => ({showOptionsPopup: !prevState.showOptionsPopup}));
  }

  render() {
    const {movie} = this.props;
    const {showOptionsPopup} = this.state;
    return (
        <>
          <div className={style.card}>
            <div className={style.imgContainer}>
              <img className={style.image} src={movie.poster} alt={movie.title}/>
              <button
                  className={style.btnOptions}
                  onClick={this.toggleOptionsPopup}
              >
                ...
              </button>
            </div>
            <div className={style.name}>
              <div>{movie.title}</div>
              <div>{movie.release}</div>
            </div>
            <div className={style.genres}>{movie.genre.join(', ')}</div>
            <div className={style.optionsContainer}>
              <MovieOptions
                  show={showOptionsPopup}
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
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string.isRequired)
  }).isRequired
};

export default MovieCard;
