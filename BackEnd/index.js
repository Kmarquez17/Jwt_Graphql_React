import "dotenv/config";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import schema from "./graphql/index";
import models from "./models";
import initMongo from "./config/db";

const app = express();
const server = new ApolloServer({
  schema,
  context: {
    models
  }
});

server.applyMiddleware({ app });

app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
  initMongo.connect(server.graphqlPath);
});
