import React from 'react';
import style from './Main.module.css';
import MovieList from '../MovieList';
import GenreList from '../GenreList';
import SortBy from '../Sort';
import Count from '../Count';

const Main = ({movies, genres, options, count}) => {
  return (
      <main className={style.main}>
        <div className={style.filterSort}>
          <GenreList genres={genres}/>
          <SortBy options={options}/>
        </div>
        <Count count={count}/>
        <MovieList movies={movies}/>
      </main>
  );
};

export default Main;
