import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "../redux/reducers";
import saga from "../redux/saga";

const sagaMiddleware = new createSagaMiddleware();
const store = createStore(
  combineReducers(reducers),
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(saga);

export default store;
