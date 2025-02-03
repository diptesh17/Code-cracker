import React from "react";
import { useNavigate } from "react-router-dom";

const developers = [
  {
    id: 1,
    name: "Alice Smith",
    email: "alice@example.com",
    leetcode: "alice_smith",
    github: "alice_github",
    solved: 200,
    rating: 1900,
  },
  {
    id: 2,
    name: "Bob Johnson",
    email: "bob@example.com",
    leetcode: "bob_johnson",
    github: "bob_github",
    solved: 250,
    rating: 2100,
  },
];

const RecruiterDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center pt-20">
      <h1 className="text-3xl font-bold mb-6">🤵 Recruiter Dashboard</h1>

      <div className="w-full max-w-2xl">
        {developers.map((dev) => (
          <div key={dev.id} className="bg-gray-800 p-4 rounded-lg shadow-lg mb-4 flex justify-between items-center">
            <div>
              <p className="text-xl font-semibold">{dev.name}</p>
              <p className="text-gray-300">{dev.email}</p>
              <p className="text-gray-300">LeetCode: {dev.leetcode}</p>
              <p className="text-gray-300">GitHub: {dev.github}</p>
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-400 px-4 py-2 rounded-md"
              onClick={() => navigate(`/profile/${dev.id}`, { state: dev })}
            >
              View Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecruiterDashboard;
