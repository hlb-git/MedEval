const {
    getAllDoctors, 
    doctorLogin, 
    updateByEmail,
    doctorSignup
} = require('../controllers/doctorControllers');

const express = require('express');
const router = express.Router();

router.get('/api/doctors', getAllDoctors);
router.get('/api/doctorlogin', doctorLogin);
router.put('/api/doctorupdate', updateByEmail)
router.post('/api/doctorsignup', doctorSignup);

module.exports = router;
// Compare this snippet from backend/routes/doctorRoutes.js:
