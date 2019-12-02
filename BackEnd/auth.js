import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const auth = {
  login: async (email, password, User, SECRET) => {
    let errors = [];
    const user = await User.findOne({ email });

    if (!user) {
      return {
        success: false,
        errors: [{ path: "email", message: "El email no existe" }]
      };
    }

    const validPassaword = await bcrypt.compare(password, user.password);

    if (!validPassaword) {
      return {
        success: false,
        errors: [{ path: "email", message: "El email no existe" }]
      };
    }

    const token = auth.getToken(user, SECRET);
    console.log(`token`, token);

    return {
      success: true,
      token,
      errors: []
    };
  },
  getToken: ({ _id }, SECRET) => {
    const token = jwt.sign({ user: _id }, SECRET, { expiresIn: "5d" });
    return token;
  }
};

export default auth;
