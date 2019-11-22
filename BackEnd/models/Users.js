import mongoose, { Schema } from "mongoose";
import validate from "mongoose-validator";

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: [true, "El campo es requerido"],
    validate: [
      validate({
        validator: "isLength",
        arguments: [6, 8],
        message: "El nombre de usuario debe de contener entre {ARGS[0]} y {ARGS[1]}"
      }),
      validate({
        validator: "isAlphanumeric",
        message: "El nombre de usuario debe ser alfa numerico"
      })
    ]
  },
  email: {
    type: String,
    validate: [
      validate({
        validator: "isEmail",
        message: "Introduce un email válido"
      })
    ]
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
