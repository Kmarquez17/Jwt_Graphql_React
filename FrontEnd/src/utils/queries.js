import gql from "graphql-tag";

export default {
  query: {
    allUsers: gql`
      query {
        allUsers {
          username
        }
      }
    `
  },
  mutation: {
    createUser: gql`
      mutation crearUser(
        $username: String!
        $password: String!
        $fullname: String!
        $email: String!
      ) {
        crearUser(
          username: $username
          password: $password
          fullname: $fullname
          email: $email
        ) {
          success
          errors {
            path
            message
          }
        }
      }
    `
  }
  // suscription: {

  // }
};
