import React from "react";
import {render} from "react-dom";
import App from "./component/App/App";

render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>,
    document.getElementById('root')
);
