import gql from "graphql-tag";

export const REGISTER = gql`
  mutation($email: String!, $password: String!) {
    createUser(email: $email, password: $password) {
      user {
        id
        email
      }
      token
    }
  }
`;
