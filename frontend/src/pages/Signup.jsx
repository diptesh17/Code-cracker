import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSignup = () => {
    login(formData);
    navigate("/dashboard");
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-6 rounded-lg w-96">
        <h2 className="text-2xl font-bold text-center">Signup</h2>
        <input type="text" placeholder="Name" className="w-full p-2 mt-4 bg-gray-700 rounded" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
        <input type="email" placeholder="Email" className="w-full p-2 mt-4 bg-gray-700 rounded" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
        <input type="password" placeholder="Password" className="w-full p-2 mt-4 bg-gray-700 rounded" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
        <button onClick={handleSignup} className="w-full mt-4 bg-blue-600 p-2 rounded hover:bg-blue-700">Signup</button>
      </div>
    </div>
  );
}
