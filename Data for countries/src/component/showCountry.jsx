import apiService from '../Service/api'
import { useState,useEffect } from 'react'
const ShowCountry = ({country}) => {
    const [weather,setWeather] = useState('')

    useEffect(()=>{
        apiService
        .getWeather(country.name.common)
        .then(w=>setWeather(w))
    },[])

    if(country==null){
        return (
            <div>No country is found</div>
        )
    }


  return (
    <div>
      <h1>{country.name.common}</h1>
      <div>capital {country.capital}</div>
      <div>area {country.area}</div>
      <h3>Languages:</h3>
      <ul>
        {
            Object.values(country.languages).map((l,i)=><li key={i}>{l}</li>)
        }
      </ul>
      <img src={country.flags.png}/>
      {weather!==''&&
        <div>
            <h2>Weather in {country.name.common}</h2>
            <p>temperature {weather.main.temp}</p>
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}/>
            <p>wind {weather.wind.speed} m/s</p>
        </div>

      }
    </div>
  )
}

export default ShowCountry
