import React, { Component } from "react";
import { Query } from "react-apollo";

import queries from "../utils/queries.js";

// const query = gql`
//   query {
//     allUsers {
//       username
//     }
//   }
// `;

const userItem = (user, index) => <li key={index}>{user.username}</li>;

class Home extends Component {
  render() {
    return (
      <Query query={queries.query.allUsers}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`;

          console.log(data);

          return <ul>{data.allUsers.map(userItem)}</ul>;
        }}
      </Query>
    );
  }
}

export default Home;
