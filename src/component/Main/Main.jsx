import React from 'react';
import style from './Main.module.css';
import MovieList from '../MovieList';
import GenreList from '../GenreList';
import SortBy from '../Sort';
import Count from '../Count';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {movieList: [], sortBy: ''};
    this.changeSort = this.changeSort.bind(this);
  }

  changeSort(order) {
    this.setState({sortBy: order});
  }

  componentDidMount() {
    this.setState({movieList: this.props.movies});
    this.setState({sortBy: 'date'})
  }

  render() {
    const {genres, options} = this.props;

    let movies = this.state.movieList.sort((a, b) => {
      return this.state.sortBy === 'date'
          ? Date.parse(b.release) - Date.parse(a.release)
          : a.title.localeCompare(b.title);
    });

    return (
        <main className={style.main}>
          <div className={style.filterSort}>
            <GenreList genres={genres}/>
            <SortBy
                options={options}
                sortBy={this.state.sortBy}
                changeSort={this.changeSort}
            />
          </div>
          <Count count={movies.length}/>
          <MovieList movies={movies}/>
        </main>
    );
  }
}

export default Main;
