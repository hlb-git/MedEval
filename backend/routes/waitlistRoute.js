const { addWaitList, getAllWaitList } = require('../controllers/waitlistController');
const express = require('express');
const router = express.Router();

router.post('/api/addwaitlist', addWaitList);
router.get('/api/allwaitlist', getAllWaitList);

module.exports = router;
