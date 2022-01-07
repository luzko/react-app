import React, {useEffect} from "react";
import style from "./SortOrder.module.css";
import {useNavigate, useParams, useSearchParams} from "react-router-dom";
import {optionsValue} from "../../constant/constant";

const SortOrder = () => {
  let navigate = useNavigate();
  let [searchParams] = useSearchParams();
  let {searchQuery} = useParams();
  let sortOrder = searchParams.get('sortOrder')

  const changeSortOrder = (sortOrder) => {
    searchParams.set('sortOrder', sortOrder);
    navigate(`/search${searchQuery ? '/' + searchQuery : '/'}?${searchParams.toString()}`)

    useEffect(() => {
      if (!['asc', 'desc'].includes(sortOrder)) {
        changeSortOrder('desc')
      }
    }, [sortOrder])
  }

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
