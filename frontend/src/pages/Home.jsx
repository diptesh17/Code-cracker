import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import codingImage from "../assets/codingImage.jpg"; 

const Home = () => {
  const [role, setRole] = useState(null);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white px-6 pt-20">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-blue-400 mb-6">
            Choose Your Role 🚀
          </h1>
          <p className="text-gray-300 text-lg mb-6 leading-relaxed">
            Whether you're a **developer** looking for opportunities or a **recruiter** searching for top talent, CodeCracker connects you with the right people!
          </p>

          <div className="flex flex-col md:flex-row gap-4">
            <button onClick={() => setRole("developer")} className="px-6 py-3 bg-green-500 hover:bg-green-400 text-white font-bold rounded-md">
              I'm a Developer
            </button>
            <button onClick={() => setRole("recruiter")} className="px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white font-bold rounded-md">
              I'm a Recruiter
            </button>
          </div>

          {/* Dynamic Buttons */}
          {role && (
            <div className="mt-6">
              <p className="text-lg text-gray-300">Continue as {role}:</p>
              <div className="flex gap-4 mt-2">
                <Link to="/login"><Button text="Login" className="bg-yellow-500 hover:bg-yellow-400" /></Link>
                <Link to="/signup"><Button text="Signup" className="bg-purple-500 hover:bg-purple-400" /></Link>
              </div>
            </div>
          )}
        </div>

        {/* Right Image Section */}
        <div className="flex-1 flex justify-center">
          <img
            src={codingImage} 
            alt="Coding Illustration"
            className="rounded-lg shadow-lg w-full max-w-sm md:max-w-md"
          />
        </div>

      </div>
    </div>
  );
};

export default Home;
