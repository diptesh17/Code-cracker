import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    role: { type: String, required: true, enum: ["developer", "recruiter"] },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    company: { type: String },
    leetcode: { type: String },
    codechef: { type: String },
    gfg: { type: String },
    github: { type: String },
  },
  { timestamps: true }
);

// Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

export default mongoose.model("User", userSchema);
