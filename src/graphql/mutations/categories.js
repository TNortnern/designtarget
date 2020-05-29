import gql from "graphql-tag";

export const CREATE_CATEGORY = gql`
  mutation($name: String!, $description: String!) {
    createCategory(name: $name, description: $description) {
      id
      name
      description
    }
  }
`;

export const DELETE_CATEGORY = gql`
  mutation($id: ID) {
    deleteCategory(id: $id) {
      id
    }
  }
`;
