var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/children', function(req, res, next) {
  knex('children').where('user_id', 1).then(function(results){
    res.json(results);
  });
});

router.post('/children/new', function(req, res){
  var newChild = {
    user_id: 1,
    name: req.body.name,
    image: req.body.image
  };
  knex('children').insert(newChild).then(function(result){
    console.log('New child: ', result);
    if(!result){
      console.log('error');
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
    console.log(child);
    if (child) {
      res.json({name: 'Name "'+name+'" is not unique!'})
    } else {
      res.json({});
    }
  })
});

module.exports = router;
