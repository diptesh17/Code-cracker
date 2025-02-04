const express = require('express');
const { getRecruiterProfile, updateRecruiterProfile } = require('../controllers/recruiterController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/profile', authMiddleware, getRecruiterProfile);
router.put('/profile', authMiddleware, updateRecruiterProfile);

module.exports = router;