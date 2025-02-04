import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

// Register Recruiter
export const registerRecruiter = async (data) => {
  return await axios.post(`${API_URL}/auth/register/recruiter`, data);
};

// Register Student
export const registerStudent = async (data) => {
  return await axios.post(`${API_URL}/auth/register/student`, data);
};

// Login
export const login = async (data) => {
  return await axios.post(`${API_URL}/auth/login`, data);
};

// Get Recruiter Profile
export const getRecruiterProfile = async (token) => {
  return await axios.get(`${API_URL}/recruiter/profile`, {
    headers: { 'x-auth-token': token },
  });
};

// Get Student Profile
export const getStudentProfile = async (token) => {
  return await axios.get(`${API_URL}/student/profile`, {
    headers: { 'x-auth-token': token },
  });
};