import bcrypt from "bcrypt";

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
      console.log(args);
      try {
        const hasPass = await bcrypt.hash(args.password, 10);
        console.log(hasPass);
        const user = await models.User.create({ ...args, password: hasPass });

        console.log(user)

        return true;
      } catch (error) {
        return false;
      }
    }
  }
};
