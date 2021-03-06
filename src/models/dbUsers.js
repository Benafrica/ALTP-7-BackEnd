import mongoose from "mongoose";

import bcrypt from "bcrypt";

const dbUsers = new mongoose.Schema({
  fName: {
    type: String,
    required: true,
  },
  lName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

dbUsers.pre("save", async function (next) {
  try {
    const passSalt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, passSalt);
    this.password = hashedPassword;
    next();
  } catch (err) {
    next(err);
  }
});

dbUsers.methods.isValidPassword = async function (password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    throw error;
  }
};

export default mongoose.model("dbUser", dbUsers);
