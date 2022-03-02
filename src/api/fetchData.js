import axios from "axios";

const apiUrlCurrentWeather= "https://api.openweathermap.org/data/2.5/weather"
const apiKey = "86b7651c9c480262962e6a1c7e09e933"

const apiUrlForecast = "https://api.openweathermap.org/data/2.5/onecall"

export const getWeatherByCityName = async (name) => {
    const data = await axios.get(apiUrlCurrentWeather, {params: {q: name, apiKey: apiKey}} ).catch((err) => {
        console.log(err);
    })
    return data
}

export const getWeatherByCoords = async ({lat, lon}) => {
    const data = await axios.get(apiUrlCurrentWeather, {params: {lat: lat,lon: lon, apiKey: apiKey}} ).catch((err) => {
        console.log(err);
    })
    return data
}

export const getForecastByCityCoord = async ({lat, lon}) =>{
    const data = await axios.get(apiUrlForecast, {params: {lat: lat,lon: lon, appid: apiKey}} ).catch((err) => {
        console.log(err);
    })
    return data
}