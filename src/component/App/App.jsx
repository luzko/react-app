import React from "react";
import {mockMovies} from '../../data/mock-data';
import {genres, sort} from '../../data/data';
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
    this.state = {
      movieList: [], sortBy: {field: 'RELEASE DATE', direction: 'asc'}
    }
    this.changeSort = this.changeSort.bind(this);
    this.changeOrder = this.changeOrder.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
    this.updateMovie = this.updateMovie.bind(this);
  }

  changeSort(field) {
    const direction = {...this.state.sortBy}.direction
    this.setState({sortBy: {field, direction}});
  }

  changeOrder(order) {
    const field = {...this.state.sortBy}.field
    const direction = order === 'asc' ? 'desc' : 'asc'
    this.setState({sortBy: {field, direction}});
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
    let movies = this.state.movieList;
    const movieIndex = movies.findIndex((x) => x.id === movie.id);
    movies[movieIndex] = movie;
    this.setState({movieList: movies});
  }

  componentDidMount() {
    this.setState({movieList: mockMovies})
  }

  render() {
    //const movies = SortService.sort(this.state.movieList, this.state.sortBy);
    const movies = this.state.movieList;

    return (
        <ErrorBoundary>
          <Header addMovie={this.addMovie}/>
          <main className={style.main}>
            <div className={style.filterSort}>
              <FilterGenre genres={genres}/>
              <SortBy
                  sortBy={this.state.sortBy}
                  changeSort={this.changeSort}
                  changeOrder={this.changeOrder}
                  options={sort.fields}
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
