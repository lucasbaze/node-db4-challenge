const router = require('express').Router();
const Recipes = require('./recipe-model');

router.get('/', async (req, res) => {
    let recipes = await Recipes.getRecipes();
    res.status(200).json(recipes);
});

module.exports = router;
