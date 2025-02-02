import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login({ email }); 
    navigate("/dashboard");
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-6 rounded-lg w-96">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <input type="email" placeholder="Email" className="w-full p-2 mt-4 bg-gray-700 rounded" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" className="w-full p-2 mt-4 bg-gray-700 rounded" onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin} className="w-full mt-4 bg-blue-600 p-2 rounded hover:bg-blue-700">Login</button>
      </div>
    </div>
  );
}
