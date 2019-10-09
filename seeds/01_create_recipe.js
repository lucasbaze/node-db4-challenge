exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('recipes')
        .del()
        .then(function() {
            // Inserts seed entries
            return knex('recipes').insert([
                { recipe_name: 'Spinach Quiche' },
                { recipe_name: 'Egg Dogs' },
                { recipe_name: 'Keto Cheesecake' },
            ]);
        });
};
