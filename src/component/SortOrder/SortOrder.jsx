import React, {useEffect} from "react";
import style from "./SortOrder.module.css";
import {useHistory, useLocation, useParams} from "react-router-dom";
import {navigateToSearch} from "../../helper/routeHelper";

const SortOrder = () => {
  let history = useHistory();
  let {search} = useLocation();
  let searchParams = new URLSearchParams(search);
  let {searchQuery} = useParams();
  let sortOrder = searchParams.get('sortOrder')

  const changeSortOrder = (sortOrder) => {
    searchParams.set('sortOrder', sortOrder);
    navigateToSearch(history, searchQuery, searchParams);
  }

  useEffect(() => {
    if (!['asc', 'desc'].includes(sortOrder)) {
      changeSortOrder('desc')
    }
  }, [sortOrder])

  const onSelectionChange = (sortOrder) => {
    changeSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
  };

  return (
      <div className={style.order}
           onClick={() => onSelectionChange(sortOrder)}>
        {sortOrder === 'asc' ? "▲" : "▼"}
      </div>
  );
}

export default SortOrder;
