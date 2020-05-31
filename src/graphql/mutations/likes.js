import gql from "graphql-tag";

export const TOGGLE_LIKE = gql`
  mutation($id: ID, $user: ID, $resource: ID) {
    toggleLike(id: $id, user: $user, resource: $resource) {
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
