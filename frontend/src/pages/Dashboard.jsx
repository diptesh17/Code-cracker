import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-800 text-white">
      <h1 className="text-4xl font-bold">Dashboard</h1>
      <p className="mt-4">Welcome, {user?.email || "User"}!</p>
    </div>
  );
}
