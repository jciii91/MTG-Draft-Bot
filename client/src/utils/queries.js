import { gql } from '@apollo/client';

export const QUERY_SETS = gql`
  query sets {
    sets {
      name
      code
    }
  }
`;

export const QUERY_CARDS = gql`
  query cards($names: [String]!) {
    cards(names: $names) {
      setNumber
      name
      multiverseId
      rank
      cmc
      manaCost
      colors
      types
    }
  }
`

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