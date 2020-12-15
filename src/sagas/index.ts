import { all, fork } from "redux-saga/effects";
import LyricsSaga from "./showsSaga";

export default function* rootSaga() {
  yield all([fork(LyricsSaga)]);
}