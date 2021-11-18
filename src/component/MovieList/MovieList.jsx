import React from 'react';
import style from './MovieList.module.css';
import MovieCard from "../MovieCard";
import DeleteMovie from "../DeleteMovie";
import MovieModal from "../MovieModal";
import {mockMovies} from '../../data/mock-data';

const getMovieById = (id) => mockMovies.find((movie) => movie.id === id);

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showEditForm: false,
      showDeleteForm: false,
      selectedMovieId: null,
    };
  }

  options = (action, movieId) => {
    this.setState({selectedMovieId: movieId});
    switch (action) {
      case 'edit':
        this.setState({showEditForm: true});
        break;
      case 'delete':
        this.setState({showDeleteForm: true});
        break;
    }
  }

  deleteFormAction = (action, movieId) => {
    console.log(1212121212)
    console.log(action)
    switch (action) {
      case 'confirm':
        alert(`Movie ${movieId} to be deleted!`);
        this.setState({showDeleteForm: false, selectedMovieId: null});
        break;
      case 'close':
        this.setState({showDeleteForm: false, selectedMovieId: null});
        break;
      default:
        throw new Error(`Unknown action from Delete From: ${action}`);
    }
  }

  editFormAction = (action, movieId) => {
    this.setState({showEditForm: false, selectedMovieId: null});
  }

  render() {
    return (
        <>
          <div className={style.movieList}>
            {this.props.movies.map(movie =>
                <MovieCard
                    key={movie.id}
                    movie={movie}
                    options={this.options}
                />
            )}
          </div>
          <DeleteMovie
              show={this.state.showDeleteForm}
              action={this.deleteFormAction}
              movieId={this.state.selectedMovieId}
          />
          <MovieModal
              show={this.state.showEditForm}
              action={this.editFormAction}
              isEdit
              movie={getMovieById(this.state.selectedMovieId)}
          />
        </>
    );
  }
}

export default MovieList;
