import { mergeResolvers } from "merge-graphql-schemas";

//Importamos todos los resolvers
import { UsersResolvers } from "./Users";
import { PostsResolvers } from "./Posts";

const resolvers = [UsersResolvers, PostsResolvers];

export default mergeResolvers(resolvers);
