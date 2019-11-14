export default {
  Query: {
    holamundo: (parent, args, context) => "Kevin El Crack ;)"
  }
};

// import Users from "../../models/clientes";

export const UsersResolvers = {
  Query: {
    allUsers: (parent, args, {models}) => {
      return models.User.find({});
    },
    getUser: (parent, args, {models}) => {
      return models.User.findOne(args)
    }
   
  },
  Mutation: {
    crearUser: (parent, args, { models }) => {
      console.log(args);
      return models.User.create(args);
    }
  }
};
