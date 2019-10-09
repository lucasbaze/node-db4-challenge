const knex = require('knex');
const config = require('../knexfile');

const db = knex(config.development);

module.exports = { getRecipes, getShoppingList };

//
//Get all recipes
function getRecipes() {
    return db('recipes');
}

//
//Get Ingredient List
function getShoppingList(recipe_id) {
    return db
        .select(
            'recipe_name as Recipe',
            'ing_name as Ingredient',
            'quantity as Quantity',
            'uom as Unit of Measure'
        )
        .from('recipe_ingredients')
        .join('recipes', 'recipes.recipe_id', 'recipe_ingredients.recipe_id')
        .join('ingredients', 'ingredients.ing_id', 'recipe_ingredients.ing_id')
        .where({ 'recipe_ingredients.recipe_id': recipe_id });
}
