var express = require('express');
var router = express.Router();
var Computer = require('../models/computer.js');


// POST ONE computer
router.post('/computers', function(req, res, next){
  new Computer ({
    name: req.body.name,
    model: req.body.model,
    price: req.body.price
  })

  .saveQ()
    .then(function(result){res.json(result)})
    .catch(function(err){res.send(err)})
    .done();
});

// GET ONE computer
router.get('/computer/:id', function(req, res, next){
  Computer.findByIdQ(req.params.id)
    .then(function(result){res.json(result)})
    .catch(function(err){res.send(err)})
    .done();
});

// GET ALL computers
router.get('/computers', function(req, res, next){
  Computer.findQ()
    .then(function(result){res.json(result)})
    .catch(function(err){res.send(err)})
    .done();
});

// PUT ONE computer
router.put('/computer/:id', function(req, res, next){
  Computer.findByIdAndUpdateQ(req.params.id, req.body)
    .then(function(result){res.json(result)})
    .catch(function(err){res.send(err)})
    .done();
});

// DELETE ONE computer
router.delete('/computer/:id', function(req, res, next){
  Computer.findByIdAndRemoveQ(req.params.id)
    .then(function(result){res.json(result)})
    .catch(function(err){res.send(err)})
    .done();
});


module.exports = router;
