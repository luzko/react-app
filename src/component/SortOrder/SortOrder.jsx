import React from "react";
import PropTypes from "prop-types";
import classes from "./SortOrder.module.css";

const SortOrder = ({sortBy, changeOrder}) => {
  return (
      <div className={classes.order} onClick={() => changeOrder(sortBy.direction)}>
        {sortBy.direction === 'asc' ? "▲" : "▼"}
      </div>
  );
}

export default SortOrder;
