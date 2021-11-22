import React from 'react';
import style from './FilterGenre.module.css';
import Genre from "../Genre";

const FilterGenre = ({genres}) => {
  return (
      <div className={style.genreList}>
        {genres.map(genre =>
            <Genre genre={genre} key={genre.id}/>
        )}
      </div>
  );
};

export default FilterGenre;
