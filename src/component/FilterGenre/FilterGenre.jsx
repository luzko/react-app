import React, {useEffect} from "react";
import style from './FilterGenre.module.css';
import Genre from "../Genre";
import {filterGenres} from '../../constant/constant';
import {navigateToSearch} from "../../helper/routeHelper";
import {useHistory, useLocation, useParams} from "react-router-dom";

const FilterGenre = () => {
  let history = useHistory();
  let {search} = useLocation();
  let searchParams = new URLSearchParams(search);
  let {searchQuery} = useParams();
  let filterGenre = searchParams.get('genre')

  const changeGenre = (genre) => {
    searchParams.set('genre', genre)
    navigateToSearch(history, searchQuery, searchParams);
  }

  const removeGenre = () => {
    searchParams.delete('genre');
    navigateToSearch(history, searchQuery, searchParams);
  }

  useEffect(() => {
    if (filterGenre === 'all' || !filterGenres.includes(filterGenre)) {
      removeGenre()
    }
  }, [filterGenre])

  return (
      <div className={style.genreList}>
        <Genre
            title='ALL'
            isActive={filterGenre == null}
            filterChange={() => changeGenre('all')}
        />
        {filterGenres.map(genre =>
            <Genre
                key={genre}
                title={genre}
                isActive={filterGenre === genre}
                filterChange={() => changeGenre(genre)}
            />
        )}
      </div>
  );
};

export default FilterGenre;
