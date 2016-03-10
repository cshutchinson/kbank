exports.seed = function(knex, Promise){
  if(false){
    return knex('tasks').del().then(function(){
      return Promise.all([
        knex('tasks').insert({
          child_id: 1,
          transaction_id: null,
          task: 'Clean room',
          value: 2.50,
          completed: false
        }),
        knex('tasks').insert({
          child_id: 1,
          transaction_id: null,
          task: 'Bring juice cups to kitchen',
          value: 2.00,
          completed: false
        }),
        knex('tasks').insert({
          child_id: 2,
          transaction_id: null,
          task: 'Improve math grade by one letter grade',
          value: 20.00,
          completed: false
        }),
        knex('tasks').insert({
          child_id: 2,
          transaction_id: null,
          task: 'Wash dog',
          value: 5.00,
          completed: false
        })
      ])
    })
  }
}
