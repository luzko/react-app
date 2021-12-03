import React from 'react';
import SortOrder from '../SortOrder';
import style from './SortBy.module.css';
import {options} from '../../data/data';
import {getMovies, setSort} from '../../store/actions';
import store from '../../store/store';
import {useSelector} from 'react-redux';

const SortBy = () => {
  const sort = useSelector((state) => state.sort);

  const selectionChange = (value) => {
    store.dispatch(setSort(value));
    store.dispatch(getMovies());
  };

  return (
      <div>
        <span className={style.label}>SORT BY:</span>
        <select
            defaultValue={sort}
            className={style.dropdown}
            onChange={(e) => selectionChange(e.target.value)}
        >
          {options.map((option) => (
              <option key={option.id} value={option.value}>
                {option.label}
              </option>
          ))}
        </select>
        <SortOrder/>
      </div>
  );
};

export default SortBy;
