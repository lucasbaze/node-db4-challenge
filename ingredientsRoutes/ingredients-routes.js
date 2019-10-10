const router = require('express').Router();
const Ingredients = require('./ingredients-model');

router.get('/:id/recipes', async (req, res) => {
    let { id } = req.params;
    let recipes = await Ingredients.getRecipes(id);
    res.status(200).json(recipes);
});

module.exports = router;
