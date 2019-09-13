import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchScott() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    const response = yield axios.get('/api/scott', config);
    console.log(response);
    // yield put({ type: 'SET_USER', payload: response.data });
  } catch (error) {
    console.log('ERROR IN SCOTT SAGA', error);
  }
}

function* scottSaga() {
  yield takeLatest('GET_SCOTT', fetchScott);
}

export default scottSaga;
