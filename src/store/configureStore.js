import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import reducer from "./reducer";
import {rootSaga} from "./actions";

const sagaMiddleware = createSagaMiddleware();

export default (initialState) => {
  const store = createStore(reducer, initialState, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);
  store.runSaga = () => sagaMiddleware.run(rootSaga);
  store.close = () => store.dispatch(END);
  return store;
};
