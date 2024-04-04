const { Profile, Recipe } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth'); // Adjust the path to auth.js as necessary


const resolvers = {
  Query: {
    // Fetch all profiles
    profiles: async () => {
      return await Profile.find();
    },
    // Fetch a single profile by ID
    profile: async (_, args, context) => {
      if (context.user) {
        return await Profile.findById(context.user._id).populate('recipes');
      }
      throw AuthenticationError
    },
  },
  Mutation: {
    // Create an account with hashed password and return JWT token
    createAccount: async (_, { username, email, password }) => {
      const user = await Profile.create({
        username,
        email,
        password,
      });

      const token = signToken(user);

      return { token, user };
    },
    // Add a recipe to a user's profile
    addRecipe: async (_, args, context) => {
      if (context.user) {
        const newRecipe = await Recipe.create(args);

        const updatedUser = await Profile.findOneAndUpdate({
          _id: context.user._id
        
        }, 
        {
          $push: { recipes: newRecipe._id }
        },
          { new: true }
        );

        return updatedUser;
      }
      throw AuthenticationError
    },
    // Remove an account by ID
    // removeAccount: async (_, { profileId }) => {
    //     return await Profile.findByIdAndDelete(profileId);
    // },
    // Remove a recipe from a user's profile
    removeRecipe: async (_, { profileId, recipe }) => {
      return await Profile.findByIdAndUpdate(
        profileId,
        { $pull: { recipes: recipe } },
        { new: true }
      );
    },
    login: async (_, { email, password }) => {
      // Find the user by email
      const user = await Profile.findOne({ email });
      if (!user) {
        throw new Error('User not found');
      }

      // Compare the submitted password using the isCorrectPassword method
      const validPassword = await user.isCorrectPassword(password);
      if (!validPassword) {
        throw new Error('Wrong password');
      }

      // If the passwords match, generate and return the JWT token
      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;