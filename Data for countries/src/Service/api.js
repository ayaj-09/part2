import axios from 'axios'
const api_key = import.meta.env.VITE_API_KEY

const getAll = () => {
    return axios
    .get('https://studies.cs.helsinki.fi/restcountries/api/all')
    .then(response=>response.data)
}

const getWeather = (city) => {
    return axios
    .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`)
    .then(response=>response.data)
}



export default {getAll,getWeather}