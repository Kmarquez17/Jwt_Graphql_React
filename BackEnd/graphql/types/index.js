import { mergeTypes } from "merge-graphql-schemas";
import { importSchema } from "graphql-import";

const Users = importSchema("graphql/types/Users.graphql");

const typeDefs = [Users];

export default mergeTypes(typeDefs, { all: true });
