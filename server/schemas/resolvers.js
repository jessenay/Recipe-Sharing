const { Profile, Recipe } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');


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
    // Fetch all recipes
    recipes: async () => {
      return await Recipe.find().populate('profile');
    },
    // Fetch a single recipe by ID
    recipe: async (_, args, context) => {
      return await Recipe.findById(args.id).populate('profile');
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
      if (!context.user) {
        throw new AuthenticationError('You must be logged in to perform this action.');
      }
    
      const recipeData = {
        ...args,
        profile: context.user._id
      };
    
      try {
        const newRecipe = await Recipe.create(recipeData);
    
        await Profile.findByIdAndUpdate(
          context.user._id,
          { $push: { recipes: newRecipe._id } },
          { new: true }
        );
    
        return Recipe.findById(newRecipe._id).populate('profile');
      } catch (error) {
        console.error("Error adding new recipe:", error);
        throw new Error("Failed to add new recipe.");
      }
    },
    // Remove a recipe from a user's profile
    removeRecipe: async (_, { profileId, recipe }) => {
      return await Profile.findByIdAndUpdate(
        profileId,
        { $pull: { recipes: recipe } },
        { new: true }
      );
    },
    login: async (_, { email, password }) => {
      const user = await Profile.findOne({ email });
      if (!user) {
        throw new Error('User not found');
      }

      const validPassword = await user.isCorrectPassword(password);
      if (!validPassword) {
        throw new Error('Wrong password');
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;