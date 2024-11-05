import {useState,useEffect} from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'
import personService from './Service/persons'

const App = () =>{

  const [persons,setPersons] = useState([])
  const [newName,setnewName] = useState('')
  const [newNumber,setNewNumber] = useState('')
  const [search,setSearch] = useState('')

  useEffect(()=>{
    personService
      .getAll()
      .then(initialPersons=>{
        setPersons(initialPersons)
      })
  },[])

  const addPerson = (event) => {
    event.preventDefault()
    const person = persons.find(person=>person.name.toLowerCase()===newName.toLowerCase())
    if(person){
      return window.confirm(`${newName} is already to phonebook, replace old number with new one.`)&&
      personService
        .updatePerson(person.id,{...person,number:newNumber})
        .then(p=>{
          setPersons(persons.map(prsn=>prsn.id===p.id?p:prsn))
          setnewName('')
          setNewNumber('')
        })
    }
    const personObject = {
      name:newName,
      number:newNumber
    }

    personService
      .createPerson(personObject)
      .then(newPerson=>{
        setPersons(persons.concat(newPerson))
        setnewName('')
        setNewNumber('')
      })  
  }

  const deletePerson = (id) => {
    const person = persons.find(p=>p.id===id)
    window.confirm(`Delete ${person.name}?`)&&
    personService
      .deletePerson(id)
      .then(res=>setPersons(persons.filter(p=>p.id!==id)))  
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

      <Persons persons = {personsToShow} deletePerson = {deletePerson}/>
    </div>
  )
}
export default App