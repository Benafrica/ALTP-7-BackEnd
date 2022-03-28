import mongoose from "mongoose";

const messageQueriesSchema = new mongoose.Schema({
  fullNames: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  dateOfMessage: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

export default mongoose.model("messageQuerries", messageQueriesSchema);
