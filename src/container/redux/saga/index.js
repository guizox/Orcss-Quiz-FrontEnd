import { takeLatest, takeEvery, fork } from "redux-saga/effects";

export default function* rootSaga() {
  yield [fork(takeLatest, "", () => {})];
}
