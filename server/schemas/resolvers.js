const { AuthenticationError } = require('apollo-server-express');
const { User, Card, mtgSet } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
    
        return userData;
      }
    
      throw new AuthenticationError('Not logged in');
    },
    users: async (parent, args) => {
      const users = await User.find()
        .select('-__v -password')

      return users;
    },
    pack: async (parent, args) => {
      const pack = await Card.find()
        .select('-__v')

      return pack;
    },
    sets: async (parent, args) => {
      const sets = await mtgSet.find()
        .select('-__v')

      return sets;
    },
    cards: async (parent, args) => {
      const cards = await Card.find()
        .select('-__v')

      return cards;
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
    
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
    
      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }
    
      const correctPw = await user.isCorrectPassword(password);
    
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }
    
      const token = signToken(user);
      return { token, user };
    },
    addCard: async (parent, args) => {
      const card = await Card.create(args);

      return card;
    },
    addSet: async (parent, args) => {
      const set = await mtgSet.create(args);

      return set;
    }
  }
};
  
module.exports = resolvers;