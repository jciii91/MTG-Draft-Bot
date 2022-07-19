import { gql } from '@apollo/client';

export const QUERY_SETS = gql`
  query sets {
    sets {
      name
      code
    }
  }
`;