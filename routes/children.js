var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/children', function(req, res, next) {
  knex('children').where('user_id', 1).then(function(results){
    res.json(results);
  })
});

module.exports = router;
