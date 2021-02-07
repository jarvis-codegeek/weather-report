const NAME= "WEATHER_REPORT"

const getWeatherDetailsData = (state) => {
    return state[NAME]['weather_details']
}

const loading = (state) => {
    return state[NAME]['loading']
}

const error = (state) => {
    return state[NAME]['error']
} 

export {
    getWeatherDetailsData,
    loading,
    error
}