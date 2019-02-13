import { takeLatest, takeEvery, fork } from "redux-saga/effects";

export default function* saga() {
  yield [fork(takeLatest, "", () => {})];
}
