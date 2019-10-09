const router = require('express').Router();
const Recipes = require('./recipe-model');

router.get('/', async (req, res) => {
    let recipes = await Recipes.getRecipes();
    res.status(200).json(recipes);
});

router.get('/:id', async (req, res) => {
    let { id } = req.params;
    let shoppingList = await Recipes.getShoppingList(id);
    res.status(200).json(shoppingList);
});

module.exports = router;
