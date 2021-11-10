import React from 'react';
import style from './Main.module.css';
import MovieList from '../MovieList/MovieList';
import GenreList from '../GenreList/GenreList';
import SortBy from '../Sort/SortBy';
import Count from '../Count/Count';

const Main = ({movies, genres, options}) => {
  return (
      <main className={style.main}>
        <div className={style.filterSort}>
          <GenreList genres={genres}/>
          <SortBy options={options}/>
        </div>
        <Count/>
        <MovieList movies={movies}/>
      </main>
  );
};

export default Main;
