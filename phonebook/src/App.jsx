import {useState} from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () =>{

  const [persons,setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName,setnewName] = useState('')
  const [newNumber,setNewNumber] = useState('')
  const [search,setSearch] = useState('')

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