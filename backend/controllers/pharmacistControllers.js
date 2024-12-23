const Pharmacist = require('../models/pharmacist');

const getAllPharmacists = async (req, res) => {
    try {
        const pharmacists = await Pharmacist.findAll();
        res.status(200).json(pharmacists);
    }
    catch (error) {
        res.status(500).json({error: error.message});
    }
};

const pharmLogin = async (req, res) => {
    const {email} = req.body;
    const {password} = req.body;
    try {
        const pharm = await Pharmacist.findByEmail(email);
        if (pharm && pharm.password === password) {
            res.status(200).json(Pharmacist.redacted(pharm));
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
        const updatedPharm = await Pharmacist.updateByEmail(email, updates);
        if (updatedPharm) {
            res.status(200).json(Pharmacist.redacted(updatedPharm));
        }
        else {
            res.status(404).json({error: 'Pharmacist not found'});
        }
    }
    catch (error) {
        res.status(500).json({error: error.message});
    };
}

const pharmSignup = async (req, res) => {
    const attributes = req.body;
    const createdPharm = await Pharmacist.create(new Pharmacist(attributes));
    try {
        res.status(201).json(Pharmacist.redacted(createdPharm.toJSON()));
    }
    catch (error) {
        res.status(500).json({error: error.message});
    }
}

module.exports = {
    getAllPharmacists, 
    pharmLogin, 
    updateByEmail, 
    pharmSignup
};
