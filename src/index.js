import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import {
  applyMiddleware,
  legacy_createStore as createStore,
  compose,
} from "redux";
import allReducers from "./Reducers/index.js";
import { Provider } from "react-redux";
// import createSagaMiddleware from "redux-saga";
// import watchGetData from "./sagas/saga";
// const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// composeEnhancer(applyMiddleware(sagaMiddleware))

// sagaMiddleware.run(watchGetData);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
