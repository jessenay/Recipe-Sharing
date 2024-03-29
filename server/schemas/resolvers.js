const { Profile } = require('../models');
const bcrypt = require('bcrypt');

const resolvers = {
  // Important for useQuery: The resolver matches the typeDefs entry point and informs the request of the relevant data
  Query: {
    profiles: async () => {
      return Profile.find();
    },

    // Important for Query Variables: Each query resolver function can accept up to four parameters.
    // The second parameter, commonly referred to as "args," represents the variable argument values passed with the query.
    // It is always an object, and in this case, we are destructuring that object to retrieve the profileId value.
    profile: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId });
    },
  },
  // Important for useMutation: The resolver matches the typeDefs entry point and informs the request of the relevant data
  Mutation: {

    createAccount: async (parent, { username, email, password }) => {
      // Hash the password before saving to the database
      const hashedPassword = await bcrypt.hash(password, 10);
      
      // Assuming your Profile model has fields for username, email, and password
      return Profile.create({ username, email, password: hashedPassword });
    },
    
    addRecipe: async (parent, { profileId, recipe }) => {
      return Profile.findOneAndUpdate(
        { _id: profileId },
        {
          $addToSet: { recipes: recipe},
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removeAccount: async (parent, { profileId }) => {
      return Profile.findOneAndDelete({ _id: profileId });
    },
    removeRecipe: async (parent, { profileId, recipe }) => {
      return Profile.findOneAndUpdate(
        { _id: profileId },
        { $pull: { recipes: recipe } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
