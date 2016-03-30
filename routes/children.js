var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/children', function(req, res, next) {
  // select children.id, children.name, (select sum(transactions.amount) from transactions where transactions.child_id =
  // children.id) as balance, (select count(tasks.id) from tasks where tasks.child_id = children.id and tasks.completed=false) as
  //  taskcount
  // from children
  // left join transactions
  // on children.id = transactions.child_id
  // left join tasks
  // on children.id = tasks.child_id
  // group by children.id order by children.id;
  knex.raw('select children.id, children.image, children.name, (select sum(transactions.amount) from transactions where transactions.child_id = children.id) as balance, (select count(tasks.id) from tasks where tasks.child_id = children.id and tasks.completed=false) as taskcount from children left join transactions on children.id = transactions.child_id left join tasks on children.id = tasks.child_id group by children.id order by children.id;')
  .then(function(results){
    res.json(results.rows);
  });
});

router.get('/children/tasks/:id', function(req, res){
  knex('tasks').where('child_id', req.params.id)
  .andWhere('completed', 'false').orderBy('id', 'asc')
  .then(function(tasks){
    res.json(tasks);
  })
})

router.get('/children/transactions/:id', function(req, res){
  knex('transactions').where('child_id', req.params.id).orderBy('id', 'asc')
  .then(function(transactions){
    res.json(transactions);
  })
})

router.post('/children/new', function(req, res){
  var newChild = {
    user_id: 1,
    name: req.body.name,
    image: req.body.image
  };
  knex('children').insert(newChild).then(function(result){
    if(!result){
			return res.status(500).json({error: 'Could not save post'});
    }
    res.json(newChild);
  });
});

router.post('/validateChildFields', function(req, res, next){
	var body = req.body;
	var name = body.name ? body.name.trim() : '';

  knex('children').select('name').where('user_id', 1)
  .where( knex.raw('LOWER("name") = ?', name.toLowerCase()))
  .first().then(function(child){
    if (child) {
      res.json({name: 'Name "'+name+'" is not unique!'})
    } else {
      res.json({});
    }
  })
});

router.post('/validateTaskFields', function(req, res){
  var body = req.body;
  var task = body.task ? body.task.trim() : '';
  if (task){
    res.json({});
  }
})

router.post('/newTask', function(req, res){
  var newTask = {
    child_id: req.body.child_Id,
    task: req.body.task,
    value: req.body.value,
    completed: false
  };
  knex('tasks').insert(newTask).then(function(result){
    if(!result){
			return res.status(500).json({error: 'Could not save task'});
    }
    res.json({});
  });
})

router.post('/toggleTask', function(req, res){
  knex('tasks').where('id', req.body.id).update({
    completed: true
  }).orderBy('id', 'asc')
   .then(function(rowsUpdated){
    res.json(rowsUpdated);
  })
})

router.post('/createTransaction', function(req, res){
  knex('tasks').where('id', req.body.id).first().then(function(task){
    var newTransaction = {
      child_id: task.child_id,
      date: new Date(),
      amount: task.value,
      description: task.task
    }
    knex('transactions').insert(newTransaction).then(function(result){
      if(!result){
        return res.status(500).json({error: 'Could not save transaction'});
      }
      res.json({});
    });
  })
})



module.exports = router;
