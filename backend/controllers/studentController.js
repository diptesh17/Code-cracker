const Student = require('../models/Student');

// Get Student Profile
const getStudentProfile = async (req, res) => {
  try {
    const student = await Student.findById(req.user.id).select('-password');
    if (!student) return res.status(404).json({ msg: 'Student not found' });
    res.json(student);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Update Student Profile
const updateStudentProfile = async (req, res) => {
  const { name, codingProfiles } = req.body;
  try {
    let student = await Student.findById(req.user.id);
    if (!student) return res.status(404).json({ msg: 'Student not found' });

    student.name = name || student.name;
    student.codingProfiles = codingProfiles || student.codingProfiles;

    await student.save();
    res.json(student);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

module.exports = { getStudentProfile, updateStudentProfile };