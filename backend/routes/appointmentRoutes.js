const {
    getAllAppointments, 
    getAppointmentById, 
    updateById,
    createAppointment
} = require('../controllers/apptControllers');

const express = require('express');
const router = express.Router();

router.get('/api/appointments', getAllAppointments);
router.get('/api/getappointment', getAppointmentById);
router.put('/api/apptupdate', updateById);
router.post('/api/newappointment', createAppointment);

module.exports = router;
