import gql from "graphql-tag";

export const TOP_FOUR_QUERY = gql`
  {
    categories {
      id
      name
      topFour {
        id
        name
        description
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
      }
    }
  }
`;

export const CATEGORY_QUERY = gql`
  query($id: ID!) {
    category(id: $id) {
      name
      resources {
        id
        name
        description
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
      }
    }
  }
`;

export const SEARCH_RESOURCES = gql`
  query($term: String!) {
    resourcesLike(name: $term) {
      id
      name
      description
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
    }
  }
`;
