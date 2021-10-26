import React from "react";
import classes from './Item.module.css'

const Item = (props) => {
  return (
      <a className={classes.link} href="#">{props.genre.title}</a>
  );
};

export default Item;
