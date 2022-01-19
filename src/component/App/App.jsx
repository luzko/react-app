import 'isomorphic-fetch';
import 'babel-polyfill';
import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import ErrorBoundary from "../ErrorBoundary";
import Footer from "../Footer";
import SearchView from '../SearchView';
import PageNotFound from '../PageNotFound';
import {hot} from "react-hot-loader";
import {Provider} from "react-redux";

const App = ({store}) => {
  return (
      <ErrorBoundary>
        <Provider store={store}>
          <Switch>
            {["/search", "/search/:searchQuery"].map(path => <Route path={path}>
              <SearchView/>
            </Route>)}
            <Route path="/">
              <Redirect to="search"/>
            </Route>
            <Route path="*">
              <PageNotFound/>
            </Route>
          </Switch>
          <Footer/>
        </Provider>
      </ErrorBoundary>
  );
}

export default hot(module)(App);
