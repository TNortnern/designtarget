import gql from "graphql-tag";

export const LOGIN_QUERY = gql`
  query($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        id
        email
        isAdmin
      }
      token
    }
  }
`;

export const USER_BY_TOKEN_QUERY = gql`
  query($token: String!) {
    userByToken(token: $token) {
      id
      email
      isAdmin
      resources {
        id
        name
        likes {
          id
          isLiked
          user {
            id
          }
        }
        image {
          url
          alt
        }
        description
      }
    }
  }
`;

export const USER_QUERY = gql`
  query($id: ID!) {
    user(id: $id) {
      id
      email
      resources {
        id
        name
        url
        likes {
          id
          isLiked
          user {
            id
          }
        }
        image {
          url
          alt
        }
        description
      }
    }
  }
`;
