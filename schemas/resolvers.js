const { AuthenticationError } = require('apollo-server-express');
const { User, Card } = require('../models');
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
    pack: async (parent, args) => {
      const pack = await Card.find()
        .select('-__v')

      return pack;
    }
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
    }
  }
};
  
module.exports = resolvers;