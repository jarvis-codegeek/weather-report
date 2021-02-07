import {GET_WEATHER_DATA} from './actionTypes';

const initialState = {
    weather_details: null,
    loading: false,
    error: null
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case GET_WEATHER_DATA.PENDING: {
            return { ...state, loading: true}
        }
        case GET_WEATHER_DATA.SUCCESS: {
            return {...state, weather_details: action.response, loading: false }
        }
        case GET_WEATHER_DATA.ERROR: {
            return {
                ...state, error: action.error, loading: false
            }
        }
    }
    return state;
}