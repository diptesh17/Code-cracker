import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [role, setRole] = useState("developer");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState(""); // Only for recruiter
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log({ role, email, password, company });

    if (role === "developer") {
      navigate("/developer-dashboard");
    } else {
      navigate("/recruiter-dashboard");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-white mb-4">Login</h2>

        {/* Role Selection */}
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full p-2 mb-3 bg-gray-700 text-white rounded"
        >
          <option value="developer">Developer</option>
          <option value="recruiter">Recruiter</option>
        </select>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-3 bg-gray-700 text-white rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-3 bg-gray-700 text-white rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* Show company name only for recruiter */}
        {role === "recruiter" && (
          <input
            type="text"
            placeholder="Company Name"
            className="w-full p-2 mb-3 bg-gray-700 text-white rounded"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
          />
        )}

        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
