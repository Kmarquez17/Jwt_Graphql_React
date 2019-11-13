import express from "express";
import { ApolloServer } from "apollo-server-express";
import { makeExecutableSchema } from "graphql-tools";

import typeDefs from "./schemas";
import resolvers from "./resolvers";

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

const app = express();
const server = new ApolloServer({ schema });

server.applyMiddleware({ app });

app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
  console.log(`Servicio en ejecución en el puerto ->`, app.get("port"));
});
