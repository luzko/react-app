import React from 'react';
import style from './Modal.module.css';

const Modal = ({title, children, visible, setVisible}) => {
  const rootClasses = [style.modal]
  rootClasses.push(visible ? style.active : '')

  return (
      <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
        <div className={style.content} onClick={(e) => e.stopPropagation()}>
          <button className={style.close} onClick={() => setVisible(false)}>
            ✕
          </button>
          <p className={style.title}>{title}</p>
          {children}
        </div>
      </div>
  );
};

export default Modal;
