import React from 'react';
import style from './FilterGenre.module.css';
import Genre from "../Genre";

const FilterGenre = ({genres}) => {
  return (
      <div className={style.genreList}>
        <Genre title='ALL'/>
        {genres.map(genre =>
            <Genre title={genre.title} key={genre.id}/>
        )}
      </div>
  );
};

export default FilterGenre;
