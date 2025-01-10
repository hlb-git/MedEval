const Patient = require('../models/patient');

const getAllPatients = async (req, res) => {
    try {
        const patients = await Patient.findAll();
        res.status(200).json(patients);
    }
    catch (error) {
        res.status(500).json({error: error.message});
    }
};

const patientLogin = async (req, res) => {
    const {email} = req.body;
    const {password} = req.body;
    try {
        const patient = await Patient.findByEmail(email);
        if (patient && patient.password === password) {
            res.status(200).json(Patient.redacted(patient));
        }
        else {
            res.status(404).json({error: 'Incorrect email or password'});
        }
    }
    catch (error) {
        res.status(500).json({error: error.message});
    };
}

const updateByEmail = async (req, res) => {
    const {email} = req.body;
    const updates = req.body;
    try {
        const updatedPatient = await Patient.updateByEmail(email, updates);
        if (updatedPatient) {
            res.status(200).json(Patient.redacted(updatedPatient));
        }
        else {
            res.status(404).json({error: 'Patient not found'});
        }
    }
    catch (error) {
        res.status(500).json({error: error.message});
    };
}

const patientSignup = async (req, res) => {
    try {
        const attributes = req.body;
        console.log(attributes);
        const createdPatient = await Patient.create(new Patient(attributes));
        res.status(201).json(Patient.redacted(createdPatient.toJSON()));
    }
    catch (error) {
        console.log("Error:", error);
        res.status(500).json({error: error.message});
    }
}

module.exports = {
    getAllPatients, 
    patientLogin, 
    updateByEmail, 
    patientSignup
};
