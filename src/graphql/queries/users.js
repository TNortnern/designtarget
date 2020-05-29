import gql from "graphql-tag";

export const LOGIN_QUERY = gql`
  query($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        id
        email
      }
      token
    }
  }
`;

export const USER_QUERY = gql`
  query($id: ID!) {
    user(id: $id) {
      id
      email
    }
  }
`;
