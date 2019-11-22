import bcrypt from "bcrypt";

const formatErrors = (error, otherErrors) => {
  const errors = error.errors;
  let objErrors = [];
  if (errors) {
    Object.entries(errors).map(err => {
      const { path, message } = err[1];
      objErrors.push({ path, message });
    });

    // console.log(objErrors);
    objErrors = objErrors.concat(otherErrors);
    return objErrors;
  } else if (otherErrors.length) {
    return otherErrors;
  }

  let uknownError = {};
  switch (error.code) {
    case 11000:
      uknownError.path = "username";
      uknownError.message = "El nombre del usuario ya existe";
      break;
    default:
      uknownError.path = "Desconocido";
      uknownError.message = error.message;
  }

  return [uknownError];
};

export const UsersResolvers = {
  Query: {
    allUsers: (parent, args, { models }) => {
      return models.User.find({});
    },
    getUser: (parent, args, { models }) => {
      return models.User.findOne(args);
    }
  },
  Mutation: {
    crearUser: async (parent, args, { models }) => {
      const otherErrors = [];
      try {
        if (args.password.length < 8) {
          otherErrors.push({
            path: "password",
            message: "Password debe ser mayor a 8 caracteres"
          });
        }
        const hasPass = await bcrypt.hash(args.password, 10);
        const user = await models.User.create({ ...args, password: hasPass });

        return {
          success: true,
          errors: []
        };
      } catch (error) {
        return {
          success: false,
          errors: formatErrors(error, otherErrors)
        };
      }
    }
  }
};
