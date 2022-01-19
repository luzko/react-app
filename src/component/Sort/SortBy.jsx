import React, {useEffect} from 'react';
import style from './SortBy.module.css';
import SortOrder from '../SortOrder';
import {options, optionsValue} from '../../constant/constant';
import {navigateToSearch} from "../../helper/routeHelper";
import {useHistory, useLocation, useParams} from "react-router-dom";

const SortBy = () => {
  let history = useHistory();
  let {search} = useLocation();
  let searchParams = new URLSearchParams(search);
  let {searchQuery} = useParams();
  let sortBy = searchParams.get('sortBy')

  const changeSortBy = (sortBy) => {
    searchParams.set('sortBy', sortBy)
    navigateToSearch(history, searchQuery, searchParams);
  }

  useEffect(() => {
    if (!optionsValue.includes(sortBy)) {
      changeSortBy('vote_average')
    }
  }, [sortBy])

  return (
      <div>
        <span className={style.label}>SORT BY:</span>
        <select
            defaultValue={sortBy}
            className={style.dropdown}
            onChange={(e) => changeSortBy(e.target.value)}
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
