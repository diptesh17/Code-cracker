const mongoose = require('mongoose');

const RecruiterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  companyName: { type: String, required: true },
  phone: { type: String, required: true },
});

module.exports = mongoose.model('Recruiter', RecruiterSchema);