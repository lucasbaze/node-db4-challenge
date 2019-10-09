const knex = require('knex');
const config = require('../knexfile');

const db = knex(config.development);

module.exports = { getRecipes, getShoppingList, getInstructions };

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
        .from('recipe_ingredients as r_i')
        .join('recipes as r', 'r.recipe_id', 'r_i.recipe_id')
        .join('ingredients as i', 'i.ing_id', 'r_i.ing_id')
        .where({ 'r_i.recipe_id': recipe_id });
}

//
//Get Instructions for the recipe
function getInstructions(recipe_id) {
    return db
        .select(
            'recipe_name as Recipe',
            'step as Step',
            'step_direction as Instructions'
        )
        .from('recipe_steps as r_s')
        .where({ 'r_s.recipe_id': recipe_id })
        .join('recipes as r', 'r.recipe_id', 'r_s.recipe_id');
}
