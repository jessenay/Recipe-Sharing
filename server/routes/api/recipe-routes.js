const router = require('express').Router();
const { getAllRecipes } = require('../../controllers/recipe-controller');

router.route('/').get(getAllRecipes);

module.exports = router;
