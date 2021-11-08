import React from 'react';
import style from './Main.module.css';
import MovieList from "../MovieList/MovieList";

const Main = (props) => {
  return (
      <main className={style.main}>
        <MovieList movies={props.movies}/>
      </main>
  );
};

export default Main;
