exports.seed = function(knex, Promise){
  if(false){
    return knex('users').del().then(function(){
      return Promise.all([
        knex('users').insert({
          id: 1,
          first_name: 'Christopher',
          last_name: 'Hutchinson',
          email: 'cshutchinson@gmail.com'
        })
      ])
    })
  }
}
