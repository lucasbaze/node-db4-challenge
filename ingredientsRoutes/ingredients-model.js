const knex = require('knex');
const config = require('../knexfile');

const db = knex(config.development);

module.exports = {
    getRecipes,
};

function getRecipes(ing_id) {
    return db
        .select('recipe_name', 'ing_name')
        .table('ingredients as i')
        .join('recipe_ingredients as r_i', 'r_i.ing_id', 'i.ing_id')
        .join('recipes as r', 'r.recipe_id', 'r_i.recipe_id')
        .where({ 'i.ing_id': ing_id });
}
