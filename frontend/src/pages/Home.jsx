import { Link } from "react-router-dom";
import Button from "../components/Button";
import codingImage from "../assets/codingImage.jpg"; // Local Image Import

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white px-6 pt-20">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-blue-400 mb-6">
            Hire the Best Coders, Instantly! 🚀
          </h1>
          <p className="text-gray-300 text-lg mb-6 leading-relaxed">
            CodeCracker helps you connect with top developers across GitHub, LeetCode, and CodeForces.
            Recruiters can search profiles & hire the best talent based on real-world coding skills!
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <Link to="/signup">
              <Button text="Join as Developer" className="bg-green-500 hover:bg-green-400" />
            </Link>
            <Link to="/login">
              <Button text="Login as Recruiter" className="bg-blue-500 hover:bg-blue-400" />
            </Link>
          </div>
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
