import {takeEvery, put, call} from 'redux-saga/effects'

import {GET_WEATHER_DATA} from './actionTypes'
import {getWeatherDetailsApi} from '../../serviceApi'

export function* doGetWeatherDetails(action) {
    const {cityName} = action
    try{
        yield put({ type: GET_WEATHER_DATA.PENDING })
        const response = yield call(getWeatherDetailsApi, cityName)
        yield put({ type: GET_WEATHER_DATA.SUCCESS, response})
    }catch(error){
        yield put({type: GET_WEATHER_DATA.ERROR, error})
    }
} 

export default function* saga(){
    yield takeEvery(GET_WEATHER_DATA.ACTION, doGetWeatherDetails);
}