import React from "react";
import {render} from "react-dom";
import App from "./component/App/App";
import store from './store/store';
import {Provider} from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

render(
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
