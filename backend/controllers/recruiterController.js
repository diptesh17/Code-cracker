const Recruiter = require('../models/Recruiter');

// Get Recruiter Profile
const getRecruiterProfile = async (req, res) => {
  try {
    const recruiter = await Recruiter.findById(req.user.id).select('-password');
    if (!recruiter) return res.status(404).json({ msg: 'Recruiter not found' });
    res.json(recruiter);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Update Recruiter Profile
const updateRecruiterProfile = async (req, res) => {
  const { name, companyName, phone } = req.body;
  try {
    let recruiter = await Recruiter.findById(req.user.id);
    if (!recruiter) return res.status(404).json({ msg: 'Recruiter not found' });

    recruiter.name = name || recruiter.name;
    recruiter.companyName = companyName || recruiter.companyName;
    recruiter.phone = phone || recruiter.phone;

    await recruiter.save();
    res.json(recruiter);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

module.exports = { getRecruiterProfile, updateRecruiterProfile };