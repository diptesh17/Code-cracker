
const Profile = () => {
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    codingPlatforms: {
      github: "https://github.com/johndoe",
      leetcode: "https://leetcode.com/johndoe",
      codeforces: "https://codeforces.com/profile/johndoe",
    },
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <div className="w-full max-w-2xl bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-3xl font-bold text-center mb-4">Profile</h2>
        <div className="flex flex-col gap-3">
          <p><span className="font-semibold">Name:</span> {user.name}</p>
          <p><span className="font-semibold">Email:</span> {user.email}</p>
        </div>
        <h3 className="mt-4 text-xl font-semibold">Coding Profiles</h3>
        <ul className="mt-2 space-y-2">
          {Object.entries(user.codingPlatforms).map(([platform, link]) => (
            <li key={platform}>
              <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                {platform.charAt(0).toUpperCase() + platform.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
