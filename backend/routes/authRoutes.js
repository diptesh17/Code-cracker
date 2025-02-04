const express = require('express');
const { registerRecruiter, registerStudent, login } = require('../controllers/authController');
const router = express.Router();

router.post('/register/recruiter', registerRecruiter);
router.post('/register/student', registerStudent);
router.post('/login', login);

module.exports = router;