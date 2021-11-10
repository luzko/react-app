import React from "react";
import {
  mockGenres,
  mockLogo,
  mockMovies,
  mockOptions
} from '../../data/mock-data';
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

function App() {
  return (
      <ErrorBoundary>
        <Header logoUrl={mockLogo.logoUrl}/>
        <Main
            movies={mockMovies.movies}
            genres={mockGenres}
            options={mockOptions}
        />
        <Footer logoUrl={mockLogo.logoUrl}/>
      </ErrorBoundary>
  );
}

export default App;
