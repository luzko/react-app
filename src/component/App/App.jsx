import React from "react";
import {mockMovies} from '../../data/mock-data';
import {genres, sortOptions} from '../../data/data';
import SortService from '../../service/SortService';
import Header from "../Header";
import MovieList from '../MovieList';
import FilterGenre from '../FilterGenre';
import SortBy from '../Sort';
import Count from '../Count';
import Footer from "../Footer";
import ErrorBoundary from "../ErrorBoundary";
import style from './App.module.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {movieList: [], sortBy: 'date_up'}
    this.changeSort = this.changeSort.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
    this.updateMovie = this.updateMovie.bind(this);
  }

  changeSort(order) {
    this.setState({sortBy: order});
  }

  addMovie(movie) {
    this.setState({movieList: [...this.state.movieList, movie]});
  }

  deleteMovie(id) {
    this.setState({
      movieList: this.state.movieList.filter((movie) => movie.id !== id)
    });
  }

  updateMovie(movie) {
    console.log(movie)
    let movies = this.state.movieList;
    const movieIndex = movies.findIndex((x) => x.id === movie.id);
    movies[movieIndex] = movie;
    this.setState({movieList: movies});
  }

  componentDidMount() {
    this.setState({movieList: mockMovies})
  }

  render() {
    const movies = SortService.sort(this.state.movieList, this.state.sortBy);

    return (
        <ErrorBoundary>
          <Header addMovie={this.addMovie}/>
          <main className={style.main}>
            <div className={style.filterSort}>
              <FilterGenre genres={genres}/>
              <SortBy
                  sortBy={this.state.sortBy}
                  changeSort={this.changeSort}
                  options={sortOptions}
              />
            </div>
            <Count count={movies.length}/>
            <MovieList
                movies={movies}
                updateMovie={this.updateMovie}
                deleteMovie={this.deleteMovie}
            />
          </main>
          <Footer/>
        </ErrorBoundary>
    );
  }
}

export default App;
