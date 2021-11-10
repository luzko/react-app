import React from 'react';
import style from './GenreList.module.css';
import Genre from "../Genre/Genre";

const GenreList = ({genres}) => {
  return (
      <div className={style.genreList}>
        {genres.map(genre =>
            <Genre genre={genre} key={genre.id}/>
        )}
      </div>
  );
};

export default GenreList;
