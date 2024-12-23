const {
    getAllPatients, 
    patientLogin, 
    updateByEmail,
    patientSignup
} = require('../controllers/patientControllers');

const express = require('express');
const router = express.Router();

router.get('/api/patients', getAllPatients);
router.get('/api/patientlogin', patientLogin);
router.put('/api/patientupdate', updateByEmail);
router.post('/api/patientsignup', patientSignup);

module.exports = router;
// Compare this snippet from backend/routes/doctorRoutes.js:
