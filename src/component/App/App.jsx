import React from "react";
import {Navigate, Route, Routes} from 'react-router-dom';
import ErrorBoundary from "../ErrorBoundary";
import Footer from "../Footer";
import SearchView from '../SearchView';
import PageNotFound from '../PageNotFound';

const App = () => {
  return (
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Navigate to="search"/>}/>
          {['/search/', '/search/:searchQuery/'].map(path => <Route path={path} element={<SearchView/>}/>)}
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
        <Footer/>
      </ErrorBoundary>
  );
}

export default App;
