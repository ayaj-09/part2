import {useState,useEffect} from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'

const App = () =>{

  const [persons,setPersons] = useState([])
  const [newName,setnewName] = useState('')
  const [newNumber,setNewNumber] = useState('')
  const [search,setSearch] = useState('')

  useEffect(()=>{
    axios
      .get('http://localhost:3001/persons')
      .then(response=>{
        setPersons(response.data)
      })
  },[])

  const addPerson = (event) => {
    event.preventDefault()
    if(persons.some(person=>
      person.name.toLowerCase()===newName.toLowerCase())){
      return alert(`${newName} already Exists`)
    }
    setPersons(persons.concat({
      name:newName,
      number:newNumber,
      id:persons.length+1
    }))
    setnewName('')
    setNewNumber('')
  }

  const personsToShow = search ? persons.filter(person=>person.name.toLowerCase().includes(search.toLowerCase())) : persons

  return (
    <div>
      <h1>Phonebook</h1>

      <Filter searchValue = {search} handleChange = {(event)=>setSearch(event.target.value)} />

      <PersonForm 
      name = {newName} 
      number = {newNumber} 
      handleNameChange = {(event)=>setnewName(event.target.value)} handleNumberChange = {(event)=>setNewNumber(event.target.value)} 
      addPerson = {addPerson}/>

      <h1>Numbers</h1>

      <Persons persons = {personsToShow} />
    </div>
  )
}
export default App