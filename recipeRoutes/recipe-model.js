const knex = require('knex');
const config = require('../knexfile');

const db = knex(config.development);

module.exports = {};

//
//Get all recipes
function getRecipes() {
    return db('recipes');
}

//
//Get Ingredient List
