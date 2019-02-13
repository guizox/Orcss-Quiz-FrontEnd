import "regenerator-runtime/runtime";
import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "../redux/reducers";
import saga from "../redux/saga";
import { logger } from "redux-logger";

const sagaMiddleware = new createSagaMiddleware();
const store = createStore(
  combineReducers(reducers),
  applyMiddleware(sagaMiddleware, logger)
);
sagaMiddleware.run(saga);

export default store;
