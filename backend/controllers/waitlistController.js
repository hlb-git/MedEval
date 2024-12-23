const WaitList = require('../models/waitlist');

const addWaitList = async (req, res) => {
    const attributes = req.body;
    const createdWaitList = await WaitList.create(new WaitList(attributes));
    try {
        res.status(201).json(createdWaitList);
    }
    catch (error) {
        res.status(500).json({error: error.message});
    }
}

const getAllWaitList = async (req, res) => {
    try {
        const waitList = await WaitList.allWaitlist();
        res.status(200).json(waitList);
    }
    catch (error) {
        res.status(500).json({error: error.message});
    }
}
module.exports = {
    addWaitList,
    getAllWaitList
}
