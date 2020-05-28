import gql from "graphql-tag";

export const TOP_FOUR_QUERY = gql`
  {
    categories {
      id
      name
      topFour {
        id
        name
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
  }
`;