import React from "react";
import { useLocation } from "react-router-dom";

const DeveloperDashboard = () => {
  const location = useLocation();
  const developer = location.state || {
    name: "John Doe",
    email: "johndoe@example.com",
    leetcode: "john123",
    codechef: "john_codechef",
    gfg: "john_gfg",
    github: "john_github",
    solved: 150,
    rating: 1800,
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center pt-20">
      <h1 className="text-3xl font-bold mb-6">👨‍💻 Developer Dashboard</h1>

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
        <p className="text-xl font-semibold">{developer.name}</p>
        <p className="text-gray-300">{developer.email}</p>

        <div className="mt-4">
          <p><strong>LeetCode:</strong> <a href={`https://leetcode.com/${developer.leetcode}`} className="text-blue-400" target="_blank">{developer.leetcode}</a></p>
          <p><strong>CodeChef:</strong> <a href={`https://www.codechef.com/users/${developer.codechef}`} className="text-blue-400" target="_blank">{developer.codechef}</a></p>
          <p><strong>GFG:</strong> <a href={`https://www.geeksforgeeks.org/${developer.gfg}`} className="text-blue-400" target="_blank">{developer.gfg}</a></p>
          <p><strong>GitHub:</strong> <a href={`https://github.com/${developer.github}`} className="text-blue-400" target="_blank">{developer.github}</a></p>
        </div>

        <div className="mt-6">
          <p className="text-lg"><strong>Questions Solved:</strong> {developer.solved}</p>
          <p className="text-lg"><strong>Contest Rating:</strong> {developer.rating}</p>
        </div>
      </div>
    </div>
  );
};

export default DeveloperDashboard;
