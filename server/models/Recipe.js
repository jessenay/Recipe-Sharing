const { Schema, model } = require('mongoose');

const recipeSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  prepTime: {
    type: String,
  },
  cookTime: {
    type: String,
  },
  ingredients: [{
    type: String,
   
  }],
  instructions: [{
    type: String,
  }],
});

const Recipe = model('Recipe', recipeSchema);

module.exports = Recipe;