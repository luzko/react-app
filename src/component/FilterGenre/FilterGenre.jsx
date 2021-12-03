import React from 'react';
import style from './FilterGenre.module.css';
import Genre from "../Genre";
import {filterGenres} from '../../data/data';
import {getMovies, setFilter} from '../../store/actions';
import store from '../../store/store';
import {useSelector} from 'react-redux';

const FilterGenre = () => {
  const filterGenre = useSelector((state) => state.filter);

  const filterChange = (value) => {
    store.dispatch(setFilter(value));
    store.dispatch(getMovies());
  };

  return (
      <div className={style.genreList}>
        <Genre title='ALL' value='' filterChange={filterChange}/>
        {filterGenres.map(genre =>
            <Genre title={genre.title} value={genre.title} key={genre.id} filterChange={filterChange}/>
        )}
      </div>
  );
};

export default FilterGenre;
