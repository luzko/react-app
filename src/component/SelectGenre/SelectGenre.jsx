import React, {useState} from 'react';
import style from "./SelectGenre.module.css";
import {genres} from '../../data/data';

const SelectGenre = (props) => {
  const [show, setShow] = useState(false)
  const rootClasses = [style.list]
  rootClasses.push(show ? '' : style.hidden)

  return (
      <>
        <div className={style.arrow} onClick={(e) => setShow(!show)}>
          ▼
        </div>
        <div className={rootClasses.join(' ')}>
          {
            genres.map(genre =>
                <li className={style.li} key={genre.id}>
                  <input
                      type="checkbox"
                      checked={props.genre?.indexOf(genre.title) > -1}
                      value={genre.title}
                      onChange={props.changeGenre}/>
                  <label>{genre.title}</label>
                </li>
            )
          }
        </div>
      </>
  )
}

export default SelectGenre;
