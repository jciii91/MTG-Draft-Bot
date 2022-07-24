import { gql } from '@apollo/client';

export const QUERY_SETS = gql`
  query sets {
    sets {
      name
      code
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
    }
  }
`;

export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      email
    }
  }
`;