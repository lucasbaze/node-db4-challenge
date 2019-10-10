exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('ingredients')
        .del()
        .then(function() {
            // Inserts seed entries
            return knex('ingredients').insert([
                { ing_name: 'Cream Cheese' },
                { ing_name: 'Eggs' },
                { ing_name: 'Stevia' },
                { ing_name: 'Pecan Pie Crust' },
                { ing_name: 'Vanilla Extract' },
                { ing_name: 'Onions' },
            ]);
        });
};
