var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/children', function(req, res, next) {
  knex('children').where('user_id', 1).then(function(results){
    res.json(results);
  });
});

router.get('/children/tasks/:id', function(req, res){
  knex('tasks').where('child_id', req.params.id).orderBy('id', 'asc')
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

module.exports = router;
