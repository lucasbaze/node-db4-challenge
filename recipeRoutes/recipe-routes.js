const router = require('express').Router();
const Recipes = require('./recipe-model');

router.get('/', async (req, res) => {
    let recipes = await Recipes.getRecipes();
    res.status(200).json(recipes);
});

router.get('/:id/shoppingList', async (req, res) => {
    let { id } = req.params;
    let shoppingList = await Recipes.getShoppingList(id);
    res.status(200).json(shoppingList);
});

router.get('/:id/instructions', async (req, res) => {
    let { id } = req.params;
    let instructions = await Recipes.getInstructions(id);
    res.status(200).json(instructions);
});

module.exports = router;
