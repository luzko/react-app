import React from 'react';
import style from './MovieList.module.css';
import MovieCard from "../MovieCard";
import DeleteMovie from "../DeleteMovie";
import MovieModal from "../MovieModal";

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showEditForm: false,
      showDeleteForm: false,
      selectedMovieId: null
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

  deleteAction = (action, movieId) => {
    switch (action) {
      case 'confirm':
        this.setState({showDeleteForm: false, selectedMovieId: null});
        break;
      case 'close':
        this.setState({showDeleteForm: false, selectedMovieId: null});
        break;
    }
  }

  editAction = () => this.setState(
      {showEditForm: false, selectedMovieId: null});

  getMovieById = (id) => this.props.movies.find((movie) => movie.id === id);

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
              action={this.deleteAction}
              movieId={this.state.selectedMovieId}
          />
          <MovieModal
              show={this.state.showEditForm}
              action={this.editAction}
              isEdit
              movie={this.getMovieById(this.state.selectedMovieId)}
          />
        </>
    );
  }
}

export default MovieList;
