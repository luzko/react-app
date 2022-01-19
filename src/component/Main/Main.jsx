import React from 'react';
import style from './Main.module.css';
import FilterGenre from "../FilterGenre/FilterGenre";
import SortBy from "../Sort/SortBy";
import Loader from "../Loader";
import Count from "../Count";
import MovieList from "../MovieList";

const Main = (props) => {
  return (
      <main className={style.main}>
        <div className={style.filterSort}>
          <FilterGenre/>
          <SortBy/>
        </div>
        {props.isLoad
            ? <Loader/>
            : props.error
                ? <div className={style.error}>{props.error.toString()}</div>
                : <>
                  <Count count={props.movies.length}/>
                  <MovieList
                      movies={props.movies.data}
                      deleteMovie={props.deleteMovie}
                      updateMovie={props.updateMovie}
                  />
                </>
        }
      </main>
  );
};

export default Main;
