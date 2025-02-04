import  { createContext, useState, useEffect } from 'react';
import { login, getRecruiterProfile, getStudentProfile } from '../utils/api.js';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  useEffect(() => {
    if (token) {
      const fetchProfile = async () => {
        try {
          const profile =
            user?.role === 'recruiter'
              ? await getRecruiterProfile(token)
              : await getStudentProfile(token);
          setUser(profile.data);
        } catch (err) {
          console.error(err);
        }
      };
      fetchProfile();
    }
  }, [token, user?.role]);

  const handleLogin = async (email, password, role) => {
    const response = await login({ email, password, role });
    localStorage.setItem('token', response.data.token);
    setToken(response.data.token);
    setUser({ role });
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken('');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;