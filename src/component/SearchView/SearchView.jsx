import React, {useEffect} from "react";
import Header from "../Header";
import MovieOverview from "../MovieOverview";
import Main from "../Main";
import {useParams, useSearchParams} from 'react-router-dom';

const SearchView = (props) => {
  let [searchParams] = useSearchParams();
  let {searchQuery} = useParams();
  let movieId = searchParams.get('movie');

  useEffect(() => {
    if (movieId) {
      props.findMovieById(movieId)
    }
  }, [movieId])

  useEffect(() => {
    props.setSearch(searchQuery)
    props.processing();
    props.fetchMovies();
  }, []);

  return (
      <>
        {props.movie && movieId ? (
            <MovieOverview movie={props.movie}/>
        ) : (
            <Header
                searchQuery={searchQuery}
                createMovie={props.createMovie}
                setSearch={props.setSearch}
                processing={props.processing}
                fetchMovies={props.fetchMovies}
            />
        )}
        <Main
            isLoad={props.isLoad}
            error={props.error}
            movies={props.movies}
            deleteMovie={props.deleteMovie}
            updateMovie={props.updateMovie}
        />
      </>
  );
};

export default SearchView;
