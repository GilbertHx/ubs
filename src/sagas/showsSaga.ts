import { put, call, takeEvery, all, fork } from "redux-saga/effects";
import { setError, setShows } from "../actions";
import { SHOWS } from "../constants";
import { fetchShows } from "../services";
import * as actionTypes from "../types/actions";


function* handleLoadShows({ payload }: actionTypes.GetShowsRequestAction) {
  try {
    const shows = yield call(fetchShows, payload); 
    yield put(setShows(shows));
  } catch (error) {
    yield put(setError(error));
  }
}

function* watchOnLoadShows() {
  yield takeEvery(SHOWS.LOAD, handleLoadShows);
}

export default function* showsSaga() {
  yield all([fork(watchOnLoadShows)]);
}
