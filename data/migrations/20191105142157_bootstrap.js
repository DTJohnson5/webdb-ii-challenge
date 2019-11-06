
exports.up = function(knex) {
    return knex.schema
    // Create your tables here
.createTable("cars", tbl => {
  tbl.increments();
  tbl.string("VIN", 255).notNullable().unique();
  tbl.integer("Year", 45).notNullable();
  tbl.string("Make", 20).notNullable();
  tbl.string("Model", 20).notNullable();
  tbl.string("Trans", 10);
  tbl.integer("Price", 10).notNullable();
  tbl.string("Condition", 25);
});
};

exports.down = function(knex) {
    return knex.schema
    // Drop tables in the opposite order you create them
.dropTableIfExists("cars");
};

