import gql from "graphql-tag";

export const CREATE_RESOURCE = gql`
  mutation(
    $name: String!
    $description: String!
    $image: String!
    $alt: String!
    $category: String!
    $importance: Int!
    $url: String!
  ) {
    createResource(
      name: $name
      description: $description
      image: $image
      alt: $alt
      category: $category
      importance: $importance
      url: $url
    ) {
      id
      name
      description
      url
      likes {
        user {
          id
        }
      }
      image {
        url
        alt
      }
    }
  }
`;

export const DELETE_RESOURCE = gql`
  mutation($id: ID) {
    deleteResource(id: $id)
  }
`;
