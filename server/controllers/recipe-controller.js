const Recipe = require('../models/Recipe');

exports.getAllRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find({});
        res.json(recipes);
    } catch (error) {
        res.status(500).send({ message: "Error fetching recipes" });
    }
};
