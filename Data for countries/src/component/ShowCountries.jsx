import ShowCountry from "./showCountry"
import { useState,useEffect } from "react"

const ShowCountries = ({countries}) => { 
    const [country,setCountry] = useState(countries)

    useEffect(()=>{
        setCountry(countries)
    },[countries])

    if(country===null){
        return null
    }
    if(country.length>10){
        return(
            <div>
                Too many matches, specify another filter
            </div>
        )
    }
    if(country.length>1){
        return(
            <div>
                {country.map((c,i)=>(
                    <div key = {i}>
                        {c.name.common}
                        <button onClick={()=>setCountry([c])}>show</button>
                    </div>))}
            </div>
        )
    }
  return (
    <div>
      <ShowCountry country = {country[0]}/>
    </div>
  )
}

export default ShowCountries
