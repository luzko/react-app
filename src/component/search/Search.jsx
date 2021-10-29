import React from "react";
import MyButton from "../button/MyButton";
import classes from './Search.module.css'

const Search = (props) => {
  return (
      <form>
        <input className={classes.myInput} type="text"
               placeholder="What do you want to watch?"/>
        <MyButton text={props.text}/>
      </form>
  );
};

export default Search;
