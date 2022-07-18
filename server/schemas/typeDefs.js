const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type mtgSet {
    name: String
    code: String
  }

  type Card {
    setNumber: Int
    name: String
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    sets: [mtgSet]
    pack: [Card]
    card(setNumber: Int!): Card
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addCard(setNumber: Int!, name: String!): Card
    addSet(name: String!, code: String!): mtgSet
  }
`;

module.exports = typeDefs;