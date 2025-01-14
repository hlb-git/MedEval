import axios from 'axios';

async function NewPatient(payload:{[key: string]: any }) {
  if (payload['fullname']) {
    payload['firstname'] = payload['fullname'].split(' ')[0];
    payload['lastname'] = payload['fullname'].split(' ')[1];
    delete payload.fullname;
  }
  payload['country'] = 'Unknown';
  return await axios.post('http://localhost:5000/api/patientsignup', payload)
    .then(response => response.data)
    .catch(error => `Error Registering User: ${error}`)
}



async function FetchPatients() {
  return await axios.get('http://localhost:5000/api/patients')
    .then(response => response)
    .catch(error => `Error fetching patients: ${error}`)
}



async function Login(email: string, password: string){
  return await axios.post('http://localhost:5000/api/patientlogin', {
    email: email,
    password: password
  })
    .then(response => response)
    .catch(error => `User doesn't exist: ${error}`)
}



export { NewPatient, FetchPatients, Login };
