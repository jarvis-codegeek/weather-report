import {combineReducers} from 'redux';
import {reducer as weatherReducer} from '../container/reduxstore'


const reducer = combineReducers({
    ["WEATHER_REPORT"]: weatherReducer
})

export default reducer;