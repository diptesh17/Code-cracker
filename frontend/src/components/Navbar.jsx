import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-opacity-90 backdrop-blur-md shadow-md bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-blue-400">
        CodeCracker
      </Link>

      {/* Links */}
      <div className="hidden md:flex gap-6 text-lg">
        <Link to="/" className="hover:text-blue-300 transition">Home</Link>
        <Link to="/developers" className="hover:text-blue-300 transition">Developers</Link>
        <Link to="/recruiters" className="hover:text-blue-300 transition">Recruiters</Link>
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <Link to="/login">
          <button className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-500 rounded-md transition">Login</button>
        </Link>
        <Link to="/signup">
          <button className="px-4 py-2 text-sm bg-green-600 hover:bg-green-500 rounded-md transition">Sign Up</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
