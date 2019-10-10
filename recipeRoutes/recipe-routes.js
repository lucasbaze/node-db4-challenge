const router = require('express').Router();
const Recipes = require('./recipe-model');

router.get('/', async (req, res) => {
    let recipes = await Recipes.getRecipes();
    res.status(200).json(recipes);
});

router.get('/:id/shoppingList', async (req, res) => {
    let { id } = req.params;
    let shoppingList = await Recipes.getShoppingList(id);
    let grouped = groupObject(shoppingList, 'Recipe', 'Ingredients');
    res.status(200).json(grouped);
});

router.get('/:id/instructions', async (req, res) => {
    let { id } = req.params;
    let instructions = await Recipes.getInstructions(id);
    let grouped = groupObject(instructions, 'Recipe', 'Steps');
    res.status(200).json(grouped);
});

//
// Helper function to reo-order the returned query
function groupObject(object, groupName, groupOn) {
    let grouped = { [groupOn]: [] };
    for (let item of object) {
        //
        //Break Item into an array
        let entries = Object.entries(item);

        //
        //Create empty ingredient object to hold ingredient, uom, and quantity
        let ingredient = {};

        //
        //Go through each property of the object
        for (let property of entries) {
            //
            //Set the Group Name
            if (!grouped[groupName]) {
                grouped[groupName] = property[1];
            }
            //
            //add the ingredients
            if (property[0] != groupName) {
                ingredient[property[0]] = property[1];
            }
        }
        grouped[groupOn].push(ingredient);
    }

    //
    //Sort the object with Recipe First
    // let sortable = [];
    // for (let property in grouped) {
    //     sortable.push(property, grouped[property]);
    // }
    //
    // sortable.sort((a, b) => {
    //     return a - b;
    // });
    //
    // let sorted = {};
    // sortable.forEach(item => {
    //     sorted[item[0]] = item[1];
    // });

    return grouped;
}

module.exports = router;
