import React, {useEffect} from "react";
import Header from "../Header";
import Main from "../Main";

import {useLocation, useParams} from 'react-router-dom';

const SearchView = (props) => {
  let location = useLocation();
  let {title} = useParams();

  useEffect(() => {
    if (location.pathname !== '/') {
      props.setSearch(title)
    }
    props.processing();
    props.fetchMovies();
  }, []);

  return (
      <>
        <Header
            title={title}
            createMovie={props.createMovie}
            setSearch={props.setSearch}
            processing={props.processing}
            fetchMovies={props.fetchMovies}
        />
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
