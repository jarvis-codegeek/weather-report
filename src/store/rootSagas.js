import {all} from 'redux-saga/effects'

import {saga as weatherReportSaga} from '../container/reduxstore'

export default function* saga() {
    yield all([weatherReportSaga()]);
}

