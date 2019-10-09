const router = require('express').Router();
const Recipes = require('./recipe-model');

router.get('/', (req, res) => {
    res.send('Inside the route!');
    // let recipes = await Recipes.getRecipes();
    // res.status(200).json(recipes);
});

module.exports = router;
