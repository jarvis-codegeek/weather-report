import {GET_WEATHER_DATA} from './actionTypes'


const getWeatherDetails  = (cityName) => {
    return {
        type: GET_WEATHER_DATA.ACTION,
        cityName
    }
}

export {
    getWeatherDetails
}