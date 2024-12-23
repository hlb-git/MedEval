const {
    getAllPharmacists, 
    pharmLogin, 
    updateByEmail,
    pharmSignup
} = require('../controllers/pharmacistControllers');

const express = require('express');
const router = express.Router();

router.get('/api/pharmacists', getAllPharmacists);
router.get('/api/pharmlogin', pharmLogin);
router.put('/api/pharmupdate', updateByEmail);
router.post('/api/pharmsignup', pharmSignup);

module.exports = router;
// Compare this snippet from backend/routes/pharmacistRoutes.js:
