import React, {useEffect} from 'react';
import MovieOverview from "../MovieOverview";
import Main from "../Main";
import PageNotFound from "../PageNotFound";
import {useParams} from 'react-router-dom';

const OverviewView = (props) => {
  let {id} = useParams();

  useEffect(() => {
    props.findMovieById(id)
  }, [id]);

  useEffect(() => {
    props.processing();
    props.fetchMovies();
  }, []);

  return (
      <>
        {props.movie ? (
            <>
              <MovieOverview movie={props.movie}/>
              <Main
                  isLoad={props.isLoad}
                  error={props.error}
                  movies={props.movies}
                  deleteMovie={props.deleteMovie}
                  updateMovie={props.updateMovie}
              />
            </>
        ) : (
            <PageNotFound/>
        )}
      </>
  );
};

export default OverviewView;
