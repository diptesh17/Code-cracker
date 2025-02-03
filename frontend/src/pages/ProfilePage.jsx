import { useLocation } from "react-router-dom";

const ProfilePage = () => {
  const location = useLocation();
  const developer = location.state;

  if (!developer) {
    return <p className="text-white">No developer data available.</p>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center pt-20">
      <h1 className="text-3xl font-bold mb-6">👤 {developer.name}'s Profile</h1>

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
        <p className="text-xl font-semibold">{developer.name}</p>
        <p className="text-gray-300">{developer.email}</p>

        <div className="mt-4">
          <p><strong>LeetCode:</strong> {developer.leetcode}</p>
          <p><strong>GitHub:</strong> {developer.github}</p>
        </div>

        <div className="mt-6">
          <p className="text-lg"><strong>Questions Solved:</strong> {developer.solved}</p>
          <p className="text-lg"><strong>Contest Rating:</strong> {developer.rating}</p>
        </div>

        <button className="mt-6 px-4 py-2 bg-green-500 hover:bg-green-400 rounded">
          Shortlist & Send Email
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
