import React from 'react';
import style from './AddMovie.module.css';
import MovieModal from '../MovieModal/MovieModal';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showModal: true}
  }

  closeModal = () => {
    this.setState({showModal: false})
  }

  openModal = () => {
    this.setState({showModal: true})
  }

  render() {
    return (
        <>
          <button className={style.addButton} onClick={this.openModal}>
            + ADD MOVIE
          </button>
          <MovieModal
              show={this.state.showModal}
              action={this.closeModal}
          />
        </>
    );
  }
}

export default AddMovie;
