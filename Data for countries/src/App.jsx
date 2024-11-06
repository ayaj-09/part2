import {useState,useEffect} from 'react'
import apiService from './Service/api'
import Loading from './component/Loading'
import ShowCountries from './component/ShowCountries'

const App = () =>{
  const [countries,setCountries] = useState([])
  const [searchValue,setSearchValue] = useState('')
  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    apiService
    .getAll()
    .then(data=>{
      setLoading(false)
      setCountries(data)
    })
  },[])

  const countriesToShow = searchValue===''?null:countries.filter(c=>c.name.common.toLowerCase().includes(searchValue.toLowerCase()))

  if(loading){
    return(
      <Loading/>
    )
  }
  return(
    <div>
      Find Countries <input value = {searchValue} onChange={(e)=>setSearchValue(e.target.value)}/>
      <ShowCountries countries={countriesToShow}/>
    </div>
  )
}

export default App