import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";

export const signup = async (req, res) => {
  const { role, email, password, company, leetcode, codechef, gfg, github } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: "User already exists" });

    const user = await User.create({
      role,
      email,
      password,
      company: role === "recruiter" ? company : undefined,
      leetcode: role === "developer" ? leetcode : undefined,
      codechef: role === "developer" ? codechef : undefined,
      gfg: role === "developer" ? gfg : undefined,
      github: role === "developer" ? github : undefined,
    });

    if (user) {
      res.status(201).json({
        _id: user._id,
        email: user.email,
        role: user.role,
        token: generateToken(user._id),
      });
    } else {
      res.status(400).json({ message: "Invalid user data" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password, company } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      if (user.role === "recruiter" && user.company !== company) {
        return res.status(400).json({ message: "Invalid company name" });
      }

      res.json({
        _id: user._id,
        email: user.email,
        role: user.role,
        token: generateToken(user._id),
      });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
