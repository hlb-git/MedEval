import axios from 'axios';

async function Register(payload:{[key: string]: any }) {
  return await axios.post('http://localhost:5000/api/patientsignup', payload)
    .then(response => response)
    .catch(error => `Error Registering User: ${error}`)
}

async function FetchPatients() {
  return await axios.get('http://localhost:5000/api/patients')
    .then(response => response)
    .catch(error => `Error fetching patients: ${error}`)
}

export { Register, FetchPatients };
