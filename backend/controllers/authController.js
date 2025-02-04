const Recruiter = require('../models/Recruiter');
const Student = require('../models/Student');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register Recruiter
const registerRecruiter = async (req, res) => {
  const { name, email, password, companyName, phone } = req.body;
  try {
    let recruiter = await Recruiter.findOne({ email });
    if (recruiter) return res.status(400).json({ msg: 'Recruiter already exists' });

    recruiter = new Recruiter({ name, email, password, companyName, phone });
    const salt = await bcrypt.genSalt(10);
    recruiter.password = await bcrypt.hash(password, salt);
    await recruiter.save();

    const payload = { recruiter: { id: recruiter.id } };
    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Register Student
const registerStudent = async (req, res) => {
  const { name, email, password, codingProfiles } = req.body;
  try {
    let student = await Student.findOne({ email });
    if (student) return res.status(400).json({ msg: 'Student already exists' });

    student = new Student({ name, email, password, codingProfiles });
    const salt = await bcrypt.genSalt(10);
    student.password = await bcrypt.hash(password, salt);
    await student.save();

    const payload = { student: { id: student.id } };
    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Login
const login = async (req, res) => {
  const { email, password, role } = req.body;
  try {
    let user;
    if (role === 'recruiter') {
      user = await Recruiter.findOne({ email });
    } else if (role === 'student') {
      user = await Student.findOne({ email });
    }
    if (!user) return res.status(400).json({ msg: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

    const payload = { user: { id: user.id, role } };
    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
      if (err) throw err;
      res.json({ token, role });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

module.exports = { registerRecruiter, registerStudent, login };