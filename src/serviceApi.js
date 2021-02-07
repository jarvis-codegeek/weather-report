import axios from 'axios';

export function getWeatherDetailsApi(cityName){
    const APIkey = "33ba6a50df2537ca158f0524def69053"
    const weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${APIkey}&units=metric`
    return axios.get(weatherApi)
}