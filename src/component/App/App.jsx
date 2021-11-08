import React from "react";
import {mockLogo, mockMovies} from '../../data/mock-data';
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

function App() {
  return (
      <>
        <Header logoUrl={mockLogo.logoUrl}/>
        <Main movies={mockMovies.movies}/>
        <Footer logoUrl={mockLogo.logoUrl}/>
      </>
  );
}

export default App;
