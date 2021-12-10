import React from 'react';
import {connect} from 'react-redux';
import style from './FilterGenre.module.css';
import Genre from "../Genre";
import {filterGenres} from '../../constant/constant';
import {getMovies, setFilter} from '../../store/actions';

const FilterGenre = ({filterGenre, setFilterGenre, fetchMovies}) => {
  const filterChange = (value) => {
    setFilterGenre(value);
    fetchMovies();
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

const mapStateToProps = (state) => ({
  filterGenre: state.filterSort.filter
});

const mapDispatchToProps = (dispatch) => ({
  setFilterGenre: (filter) => dispatch(setFilter(filter)),
  fetchMovies: () => dispatch(getMovies())
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterGenre);
