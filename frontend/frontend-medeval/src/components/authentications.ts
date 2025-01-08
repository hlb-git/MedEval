import axios from 'axios';

function Register(payload:{[key: string]: any }) {
  axios.post('http://localhost:5000', payload)
    .then(response => {return (response);
  })
    .catch(error => {return `Error Registering User: ${error}`;})
}

export default Register;
