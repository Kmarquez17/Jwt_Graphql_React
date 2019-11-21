import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: [true, "El campo es requerido"]
  },
  password: { type: String },
  fullname: { type: String },
  desc: { type: String },
  bio: { type: String },
  thumbnail: { type: String },
  post: { type: [], default: [] },
  following: { type: [], default: [] },
  followers: { type: [], default: [] }
});

const userModel = mongoose.model("user", userSchema);

export default userModel;
