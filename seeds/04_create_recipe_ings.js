exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('recipe_ingredients')
        .del()
        .then(function() {
            // Inserts seed entries
            return knex('recipe_ingredients').insert([
                { recipe_id: 1, ing_id: 1, quantity: 2.5, uom: '8oz packages' },
                { recipe_id: 1, ing_id: 2, quantity: 4, uom: 'whole' },
                { recipe_id: 1, ing_id: 3, quantity: 0.5, uom: 'cups' },
                { recipe_id: 1, ing_id: 4, quantity: 1, uom: 'whole crust' },
                { recipe_id: 1, ing_id: 5, quantity: 1, uom: 'tsp' },
            ]);
        });
};
