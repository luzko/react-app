import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import App from './component/App/App';
import configureStore from "./store/configureStore";

function renderHTML(html, preloadedState) {
  return `
      <!doctype html>
      <html>
        <head>
          <meta charset=utf-8>
          <title>GMP - ReactJS</title>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link href="/main.css" rel="stylesheet" type="text/css">
        </head>
        <body>
          <div id="root">${html}</div>
          <script>
            window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
          </script>
          <script src="/js/main.js"></script>
        </body>
      </html>
  `;
}

export default function serverRenderer() {
  return (req, res) => {
    const store = configureStore({
      movies: {
        data: [],
        totalAmount: 0
      },
      error: null,
      currentOrder: "DESC"
    });
    const context = {};
    const renderRoot = () => (
        <StaticRouter context={context} location={req.url}>
          <App
              store={store}
          />
        </StaticRouter>
    );
    store.runSaga().done.then(() => {
      const htmlString = renderToString(renderRoot());
      if (context.url) {
        res.writeHead(302, {
          Location: context.url,
        });
        res.end();
        return;
      }
      const preloadedState = store.getState();
      res.send(renderHTML(htmlString, preloadedState));
    });
    renderToString(renderRoot());
    store.close();
  };
}
