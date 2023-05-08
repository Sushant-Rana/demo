import { call, put, takeLatest } from 'redux-saga/effects';
// import { LOCATION_CHANGE } from 'react-router-redux';
// import { schema, normalize } from 'norm
// Individual exports for testing
export function* getKanyeApi() {
    try {
        console.log(`Kanye saga`)
        const result = yield fetch('https://api.quotable.io/random');
        const data = yield result.json();
        const sidebar = data.content;
        console.log(data);
        yield put({ type: 'kanye_success', sidebar });
    } catch (error) {
        yield put({ type: 'kanye_failure', error });
    }
}


function* watchgetkanyeAPI() {
    yield takeLatest('kanye', getKanyeApi);
}

// All sagas to be loaded
export default watchgetkanyeAPI;




