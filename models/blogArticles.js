
import mongoose from "mongoose";

// Blog Articles Schema

const blogArticlesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  articleContent: {
    type: String,
    required: true,
  },
  dateOfArticle: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

export default mongoose.model("blogArticles", blogArticlesSchema);
