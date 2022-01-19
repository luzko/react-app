import React, {useEffect} from "react";
import Header from "../Header";
import MovieOverview from "../MovieOverview";
import Main from "../Main";
import {useLocation, useParams} from "react-router-dom";
import {connect} from "react-redux";
import {
  createMovie,
  deleteMovie,
  findMovieById,
  getMoviesByParam,
  moviesProcessing,
  updateMovie
} from '../../store/actions';

const SearchView = ({
  isLoad,
  error,
  movies,
  movie,
  processing,
  fetchMovies,
  fetchMoviesByParams,
  deleteMovie,
  createMovie,
  findMovieById,
  updateMovie,
  setSearch
}) => {
  let {search} = useLocation();
  let searchParams = new URLSearchParams(search);
  let {searchQuery} = useParams();
  let movieId = searchParams.get('movie');

  useEffect(() => {
    fetchMoviesByParams(searchParams.get('genre'), searchParams.get('sortBy'), searchParams.get('sortOrder'), searchQuery)
  }, [searchParams.get('genre'), searchParams.get('sortBy'), searchParams.get('sortOrder'), searchQuery])

  useEffect(() => {
    if (movieId) {
      findMovieById(movieId)
    }
  }, [movieId])

  return (
      <>
        {movie && movieId ? (
            <MovieOverview movie={movie}/>
        ) : (
            <Header
                searchQuery={searchQuery}
                createMovie={createMovie}
                setSearch={setSearch}
                processing={processing}
                fetchMovies={fetchMovies}
            />
        )}
        <Main
            isLoad={isLoad}
            error={error}
            movies={movies}
            deleteMovie={deleteMovie}
            updateMovie={updateMovie}
        />
      </>
  );
};

const mapStateToProps = (state) => ({
  isLoad: state.processing,
  error: state.error,
  movies: state.movies,
  movie: state.movie
});

const mapDispatchToProps = (dispatch) => ({
  processing: () => dispatch(moviesProcessing()),
  fetchMoviesByParams: (genre, sortBy, sortOrder, searchQuery) => dispatch(getMoviesByParam(genre, sortBy, sortOrder, searchQuery)),
  findMovieById: (id) => dispatch(findMovieById(id)),
  deleteMovie: (id) => dispatch(deleteMovie(id)),
  createMovie: (movie) => dispatch(createMovie(movie)),
  updateMovie: (movie) => dispatch(updateMovie(movie)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchView);
