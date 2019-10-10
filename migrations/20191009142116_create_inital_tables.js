exports.up = function(knex) {
    return knex.schema
        .createTable('recipes', t => {
            t.increments('recipe_id');
            //
            //Recipe Name
            t.string('recipe_name', 128)
                .notNullable()
                .comment('The name of the recipe');
        })
        .createTable('ingredients', t => {
            t.increments('ing_id');
            //
            //Ingredient Name
            t.string('ing_name', 128)
                .notNullable()
                .comment('Name of the ingredient');
        })
        .createTable('recipe_ingredients', t => {
            //
            //Foreign Recipe Id
            t.integer('recipe_id').unsigned();
            t.foreign('recipe_id')
                .references('recipes.recipe_id')

                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            //
            //Foreign Ingredient ID
            t.integer('ing_id').unsigned();
            t.foreign('ing_id')
                .references('ingredients.ing_id')

                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            //
            //Quantity
            t.float('quantity').comment('Quanity in terms of Unit of Measure');
            //
            //Unit of Measure
            t.string('uom').comment('Unit of Measure');
        })
        .createTable('recipe_steps', t => {
            //
            //Foreign Recipe ID
            t.integer('recipe_id').unsigned();
            t.foreign('recipe_id')
                .references('recipes.recipe_id')

                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            //
            //Step in the recipe
            t.integer('step').notNullable();
            //
            //Directions for that step
            t.string('step_direction')
                .notNullable()
                .comment('The # of the step in the order of the recipe');
        });
};

exports.down = function(knex) {
    return knex.schema
        .dropTable('recipe_steps')
        .dropTable('recipe_ingredients')
        .dropTable('ingredients')
        .dropTable('recipes');
};
