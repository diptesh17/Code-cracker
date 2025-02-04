const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const recruiterRoutes = require('./routes/recruiterRoutes');
const studentRoutes = require('./routes/studentRoutes');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoutes);
app.use('/api/recruiter', recruiterRoutes);
app.use('/api/student', studentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));