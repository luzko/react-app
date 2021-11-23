import React, {useState} from 'react';
import style from "./SelectGenre.module.css";
import {genreOptions} from '../../data/data';

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
            genreOptions.map(genre =>
                <li className={style.li} key={genreOptions.indexOf(genre)}>
                  <input
                      type="checkbox"
                      checked={props.genre?.indexOf(genre) > -1}
                      value={genre}
                      onChange={props.changeGenre}/>
                  <label>{genre}</label>
                </li>
            )
          }
        </div>
      </>
  )
}

export default SelectGenre;
