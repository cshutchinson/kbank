exports.seed = function(knex, Promise){
  if(true){
    return knex('tasks').del().then(function(){
      return Promise.all([
        knex('tasks').insert({
          child_id: 1,
          transaction_id: null,
          task: 'Clean room',
          name: 'Mary Katherine',
          value: 2.50,
          complete: false
        }),
        knex('tasks').insert({
          child_id: 1,
          transaction_id: null,
          task: 'Bring juice cups to kitchen',
          name: 'Mary Katherine',
          value: 2.00,
          complete: false
        }),
        knex('tasks').insert({
          child_id: 2,
          transaction_id: null,
          task: 'Improve math grade by one letter grade',
          name: 'Mary Katherine',
          value: 20.00,
          complete: false
        }),
        knex('tasks').insert({
          child_id: 2,
          transaction_id: null,
          task: 'Wash dog',
          name: 'Mary Katherine',
          value: 5.00,
          complete: false
        })
      ])
    })
  }
}
