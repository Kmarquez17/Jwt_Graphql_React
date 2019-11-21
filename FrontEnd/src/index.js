import React from "react";
import { render } from "react-dom";
import App from "./App";
// import * as serviceWorker from './serviceWorker';
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";

import 'semantic-ui-css/semantic.min.css'
import './index.css'

const httpLink = new HttpLink({
  uri: "http://localhost:8081/graphql"
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

// serviceWorker.unregister();
