const Doctor = require('../models/doctor');

const getAllDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.findAll();
        res.status(200).json(doctors);
    }
    catch (error) {
        res.status(500).json({error: error.message});
    }
};

const doctorLogin = async (req, res) => {
    const {email} = req.body;
    const {password} = req.body;
    try {
        const doctor = await Doctor.findByEmail(email);
        if (doctor && doctor.password === password) {
            res.status(200).json(Doctor.redacted(doctor));
        }
        else {
            res.status(404).json({error: 'Incorrect email or password'});
        }
    }
    catch (error) {
        res.status(500).json({error: error.message});
    };
};

const updateByEmail = async (req, res) => {
    const {email} = req.body;
    const updates = req.body;
    try {
        const updatedDoctor = await Doctor.updateByEmail(email, updates);
        if (updatedDoctor) {
            res.status(200).json(Doctor.redacted(updatedDoctor));
        }
        else {
            res.status(404).json({error: 'doctor not found'});
        }
    }
    catch (error) {
        res.status(500).json({error: error.message});
    };
};

const doctorSignup = async (req, res) => {
    const attributes = req.body;
    const createdDoctor = await Doctor.create(new Doctor(attributes));
    try {
        res.status(201).json(Doctor.redacted(createdDoctor));
    }
    catch (error) {
        res.status(500).json({error: error.message});
    };
};

module.exports = {
    getAllDoctors, 
    doctorLogin, 
    updateByEmail, 
    doctorSignup
};
