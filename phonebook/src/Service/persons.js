const baseUrl = 'http://localhost:3001/persons'
import axios from 'axios'

const getAll = () => {
    const response = axios.get(baseUrl)
    return response.then(res=>res.data)
}

const createPerson = (personObject) => {
    const response = axios.post(baseUrl,personObject)
    return response.then(res=>res.data)
}

const deletePerson = (id) => {
    const response = axios.delete(`${baseUrl}/${id}`)
    return response.then(res=>res.data)
}

const updatePerson = (id,personObject) => {
    const response = axios.put(`${baseUrl}/${id}`,personObject)
    return response.then(res=>res.data)
}

export default {getAll,createPerson,deletePerson,updatePerson}