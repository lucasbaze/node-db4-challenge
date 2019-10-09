exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('recipe_steps')
        .del()
        .then(function() {
            // Inserts seed entries
            return knex('recipe_steps').insert([
                {
                    recipe_id: 1,
                    step: 1,
                    step_direction: 'Pre-heat oven to 325F',
                },
                {
                    recipe_id: 1,
                    step: 2,
                    step_direction:
                        'Mix cream cheese, eggs, vanilla extract, and stevia in bowl until there are almost no cream cheese chunks left',
                },
                {
                    recipe_id: 1,
                    step: 3,
                    step_direction: 'Pour mixture into pecan pie crust',
                },
                {
                    recipe_id: 1,
                    step: 4,
                    step_direction: 'Bake for 60 minutes',
                },
                {
                    recipe_id: 1,
                    step: 5,
                    step_direction: 'let cool for 3 hours in refrigerator',
                },
            ]);
        });
};
