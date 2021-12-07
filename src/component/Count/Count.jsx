import React from 'react';
import {connect} from 'react-redux';
import style from './Count.module.css';

const Count = ({count}) => {
  return (
      <div className={style.count}>
        {count} movies found
      </div>
  );
}

const mapStateToProps = (state) => ({
  count: state.movies.length
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Count);
