import React from "react";
import "./index.css";
import App from "./App";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { applyMiddleware, legacy_createStore } from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootReducer, { rootSaga } from './modules';

const sagaMiddleware = createSagaMiddleware();

const store = legacy_createStore(
  rootReducer,
  window.__PRELOADED_STATE__, // 이 값을 초기 상태로 사용함
  applyMiddleware(thunk, sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  
  document.getElementById("root")
);