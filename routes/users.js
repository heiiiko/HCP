const express = require('express');
const knex = require("knex");
const router = express.Router();
const db = require('../database/db');
const redis = require("redis");

/* GET users listing. */
router.get('/all', function(req, res, next) {
  db.select('*').from('users').then(resp => {
    res.send({
      success: true,
      data: resp,
    })
  })
});

router.get('/get/:id', function(req, res, next) {
  db('users').where({
    user_id: req.params.id,
  }).then(resp => {
    res.send({
      success: true,
      data: resp,
    })
  })});

router.post('/create', function(req, res, next) {
  db('users').insert({
    name: req.body.name,
    surname: req.body.surname,
    birthday: req.body.birthday,
    address: req.body.address,
    phone: req.body.phone,
    
  }).then(() => {
    res.send({ success: true, message: 'The user has been registered'})
  })
});

router.put('/update', function(req, res, next) {
  db('users').update({
    name: req.body.name,
    surname: req.body.surname,
    birthday: req.body.birthday,
    address: req.body.address,
    phone: req.body.phone,
    
  }).then(() => {
    res.send({ success: true, message: 'The user has been updated'})
  })
});

router.delete('/remove', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
