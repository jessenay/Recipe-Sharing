const Recipe = require('../models/Recipe');

const recipeController = {
    getAllRecipes(req, res) {
        Recipe.find({})
            .then(recipes => res.json(recipes))
            .catch(err => res.status(500).json(err));
    },

    getRecipeById({ params }, res) {
        Recipe.findById(params.recipeId)
            .then(recipe => {
                if (!recipe) {
                    res.status(404).json({ message: 'Recipe not found' });
                    return;
                }
                res.json(recipe);
            })
            .catch(err => res.status(500).json(err));
    },

    createRecipe(req, res) {
        const { title, image, prepTime, cookTime, ingredients, instructions } = req.body;
        Recipe.create({ title, image, prepTime, cookTime, ingredients, instructions })
            .then(newRecipe => res.status(201).json(newRecipe))
            .catch(err => res.status(400).json(err));
    },

    updateRecipe({ params, body }, res) {
        Recipe.findByIdAndUpdate(params.recipeId, body, { new: true })
            .then(updatedRecipe => {
                if (!updatedRecipe) {
                    res.status(404).json({ message: 'Recipe not found' });
                    return;
                }
                res.json(updatedRecipe);
            })
            .catch(err => res.status(400).json(err));
    },

    deleteRecipe({ params }, res) {
        Recipe.findByIdAndDelete(params.recipeId)
            .then(deletedRecipe => {
                if (!deletedRecipe) {
                    res.status(404).json({ message: 'Recipe not found' });
                    return;
                }
                res.json({ message: 'Recipe has been deleted successfully' });
            })
            .catch(err => res.status(500).json(err));
    }
};

module.exports = recipeController;
