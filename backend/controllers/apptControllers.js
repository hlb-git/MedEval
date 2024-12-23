const Appointment = require('../models/appointment');

const getAllAppointments = async (req, res) => {
    try {
        const Appointments = await Appointment.findAll();
        res.status(200).json(Appointments);
    }
    catch (error) {
        res.status(500).json({error: error.message});
    }
};

const getAppointmentById = async (req, res) => {
    const {id} = req.body;
    try {
        const appointment = await Appointment.findById(id);
        if (appointment) {
            res.status(200).json(appointment);
        }
        else {
            res.status(404).json({error: 'Appointment not found'});
        }
    }
    catch (error) {
        res.status(500).json({error: error.message});
    };
}

const updateById = async (req, res) => {
    const {id} = req.body;
    const updates = req.body;
    try {
        const updatedAppointment = await Appointment.updateById(id, updates);
        if (updatedAppointment) {
            res.status(200).json(updatedAppointment);
        }
        else {
            res.status(404).json({error: 'Appointment not found'});
        }
    }
    catch (error) {
        res.status(500).json({error: error.message});
    };
}

const createAppointment = async (req, res) => {
    const attributes = req.body;
    const newAppointment = new Appointment(attributes);
    try {
        const createdAppointment = await Appointment.create(newAppointment);
        res.status(201).json(createdAppointment);
    }
    catch (error) {
        res.status(500).json({error: error.message});
    }
}

module.exports = {
    getAllAppointments, 
    getAppointmentById, 
    updateById, 
    createAppointment
};
