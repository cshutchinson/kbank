exports.seed = function(knex, Promise){
  if(false){
    return knex('children').then(function(){
      return Promise.all([
        knex('children').insert({
          id: 1,
          user_id: 1,
          name: 'Mary Katherine',
          image: 'http://thejosevilson.com/wp-content/uploads/2013/09/child-laugh-150x150.jpg'
        }),
        knex('children').insert({
          id: 2,
          user_id: 1,
          name: 'Tindall',
          image: 'https://inthenation.nationwide.com/wp-content/uploads/magazine/NW_0613_TeenDriving-150x150.jpg'
        })
      ])
    })
  }
}
