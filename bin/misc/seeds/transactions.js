exports.seed = function(knex, Promise){
  if(false){
    return knex('transactions').then(function(){
      return Promise.all([
        knex('transactions').insert({
          child_id: 1,
          date: new Date(),
          amount: 25.00,
          description: 'Initial deposit',
        }),
        knex('transactions').insert({
          child_id: 2,
          date: new Date(),
          amount: 15.00,
          description: 'Initial deposit',
        })
      ])
    })
  }
}
