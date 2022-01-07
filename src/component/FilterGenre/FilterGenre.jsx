import React, {useEffect} from "react";
import style from './FilterGenre.module.css';
import Genre from "../Genre";
import {filterGenres} from '../../constant/constant';
import {useNavigate, useParams, useSearchParams} from "react-router-dom";

const FilterGenre = () => {
  let navigate = useNavigate();
  let [searchParams] = useSearchParams();
  let {searchQuery} = useParams();
  let filterGenre = searchParams.get('genre')

  const changeGenre = (genre) => {
    searchParams.set('genre', genre);
    navigate(`/search${searchQuery ? '/' + searchQuery : '/'}?${searchParams.toString()}`)
  }

  useEffect(() => {
    if (filterGenre == null || !filterGenres.includes(filterGenre)) {
      changeGenre('all')
    }
  }, [filterGenre])

  return (
      <div className={style.genreList}>
        <Genre
            title='ALL'
            value='all'
            filterGenre={filterGenre}
            filterChange={changeGenre}
        />
        {filterGenres.map(genre =>
            <Genre
                key={filterGenres.indexOf(genre)}
                title={genre}
                value={genre}
                filterGenre={filterGenre}
                filterChange={changeGenre}
            />
        )}
      </div>
  );
};

export default FilterGenre;
