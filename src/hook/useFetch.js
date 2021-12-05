import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {getMovies, moviesProcessing} from '../store/actions';

export const useFetch = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch((dispatch) => {
      dispatch(moviesProcessing());
      dispatch(getMovies());
    });
  }, []);
};
