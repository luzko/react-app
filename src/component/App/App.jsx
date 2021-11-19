import React from "react";
import {mockMovies} from '../../data/mock-data';
import {genres, sortOptions} from '../../data/data';
import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";
import ErrorBoundary from "../ErrorBoundary";

function App() {
  return (
      <ErrorBoundary>
        <Header/>
        <Main
            movies={mockMovies}
            genres={genres}
            options={sortOptions}
        />
        <Footer/>
      </ErrorBoundary>
  );
}

export default App;
