import React from "react";
import classes from "./SortOrder.module.css";
import {getMovies, setSortOrder} from '../../store/actions';
import store from '../../store/store';
import {useSelector} from 'react-redux';

const SortOrder = () => {
  const sortOrder = useSelector((state) => state.sortOrder);

  const onSelectionChange = (value) => {
    const direction = value === 'asc' ? 'desc' : 'asc'
    store.dispatch(setSortOrder(direction));
    store.dispatch(getMovies());
  };

  return (
      <div className={classes.order}
           onClick={() => onSelectionChange(sortOrder)}>
        {sortOrder === 'asc' ? "▲" : "▼"}
      </div>
  );
}

export default SortOrder;
