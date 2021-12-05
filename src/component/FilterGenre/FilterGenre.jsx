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
        <Genre
            title='ALL'
            value=''
            filterGenre={filterGenre}
            filterChange={filterChange}
        />
        {filterGenres.map(genre =>
            <Genre
                key={genre.id}
                title={genre.title}
                value={genre.title}
                filterGenre={filterGenre}
                filterChange={filterChange}
            />
        )}
      </div>
  );
};

export default FilterGenre;
