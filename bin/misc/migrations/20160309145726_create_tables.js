
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table){
      table.increments();
      table.string('first_name');
      table.string('last_name');
      table.string('email');
      table.string('oauthid');
      table.string('user_image');
      table.string('provider');
    })
  .then(function(){
    return knex.schema.createTable('children', function(table){
      table.increments();
      table.integer('user_id').references('id').inTable('users');
      table.string('name');
      table.string('image');
    })
  })
  .then(function(){
    return knex.schema.createTable('transactions', function(table){
      table.increments();
      table.integer('child_id').references('id').inTable('children');
      table.timestamp('date');
      table.decimal('amount');
      table.string('description');
    })
  })
  .then(function(){
    return knex.schema.createTable('tasks', function(table){
      table.increments();
      table.integer('child_id').references('id').inTable('children');
      table.integer('transaction_id').references('id').inTable('transactions');
      table.string('task');
      table.decimal('value');
      table.boolean('completed');
    })
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('tasks')
  .then(function(){
    return knex.schema.dropTableIfExists('transactions')
  })
  .then(function(){
    return knex.schema.dropTableIfExists('children')
  })
  .then(function(){
    return knex.schema.dropTableIfExists('users')
  })
};
