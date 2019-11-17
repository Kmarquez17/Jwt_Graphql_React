export const PostsResolvers = {
  Query: {
    getPost: (parent, args, { models }) => {
      return models.Post.findOne(args);
    }
  },
  Mutation: {
    crearPost: (parent, args, { models, user }) => {
      // console.log(user);
      return models.Post.create({ ...args.post, by: user });
    }
  }
};
