exports.seed = function(knex, Promise){
  if(true){
    return knex('users').del().then(function(){
      return Promise.all([
        knex('users').insert({
          first_name: 'Christopher',
          last_name: 'Hutchinson',
          email: 'cshutchinson@gmail.com'
        })
      ])
    })
  }
}
