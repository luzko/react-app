import React from "react";
import {
  mockCount,
  mockGenres,
  mockMovies,
  mockOptions
} from '../../data/mock-data';
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
            genres={mockGenres}
            options={mockOptions}
            count={mockCount}
        />
        <Footer/>
      </ErrorBoundary>
  );
}

export default App;
