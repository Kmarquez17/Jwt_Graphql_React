import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  username: { type: String, unique:true, required: [true, "El campo es requerido"] },
  password: { type: String }
});

const userModel = mongoose.model("user", userSchema);

export default userModel;
