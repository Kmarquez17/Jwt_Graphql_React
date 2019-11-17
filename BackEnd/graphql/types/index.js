import { mergeTypes } from "merge-graphql-schemas";

//Importamos todos los esquemas 
import Users from "./Users.graphql";
import Posts from "./Posts.graphql";

const typeDefs = [Users, Posts];

export default mergeTypes(typeDefs);
