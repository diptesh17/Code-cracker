import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [role, setRole] = useState("developer");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState("");
  const [leetcode, setLeetcode] = useState("");
  const [codechef, setCodechef] = useState("");
  const [gfg, setGfg] = useState("");
  const [github, setGithub] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    console.log({
      role,
      email,
      password,
      company,
      leetcode,
      codechef,
      gfg,
      github,
    });

    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-white mb-4">Signup</h2>

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

        {/* Developer-specific Fields */}
        {role === "developer" && (
          <>
            <input
              type="text"
              placeholder="LeetCode Profile URL"
              className="w-full p-2 mb-3 bg-gray-700 text-white rounded"
              value={leetcode}
              onChange={(e) => setLeetcode(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="CodeChef Profile URL"
              className="w-full p-2 mb-3 bg-gray-700 text-white rounded"
              value={codechef}
              onChange={(e) => setCodechef(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="GeeksforGeeks Profile URL"
              className="w-full p-2 mb-3 bg-gray-700 text-white rounded"
              value={gfg}
              onChange={(e) => setGfg(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="GitHub Profile URL"
              className="w-full p-2 mb-3 bg-gray-700 text-white rounded"
              value={github}
              onChange={(e) => setGithub(e.target.value)}
              required
            />
          </>
        )}

        {/* Recruiter-specific Field */}
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
          onClick={handleSignup}
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
        >
          Signup
        </button>
      </div>
    </div>
  );
};

export default Signup;
