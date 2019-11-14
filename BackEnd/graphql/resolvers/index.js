import { mergeResolvers } from "merge-graphql-schemas";

import { UsersResolvers } from "./Users";

const resolvers = [UsersResolvers];

export default mergeResolvers(resolvers);
