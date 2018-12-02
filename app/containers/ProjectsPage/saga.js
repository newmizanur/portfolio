import { take, call, put, takeLatest } from 'redux-saga/effects';
import request from '../../utils/request';
import { projectsLoaded, projectsLoadingError } from './actions';
import { LOAD_PROJECTS } from './constants';

export function* getProjects() {
  const requestUrl = `http://www.mocky.io/v2/5c0386b43000006800bb943b`;
  try {
    console.log('saga getProjects called!');
    const projects = yield call(request, requestUrl);
    yield put(projectsLoaded(projects));
  } catch (err) {
    yield put(projectsLoadingError(err));
  }
}

// Individual exports for testing
export default function* projectsPageSaga() {
  yield takeLatest(LOAD_PROJECTS, getProjects);
}
