import mongoose, { Schema } from "mongoose";

const postSchema = new Schema({
  by: {
    type: {},
    required: true
  },
  desc: String,
  photo: String,
  likedBy: {
    type: [],
    default: []
  },
  comments: {
    type: [],
    default: []
  },
  createdAt: {
    type: String,
    default: new Date()
  }
});

const postModel = mongoose.model("post", postSchema);

export default postModel;
