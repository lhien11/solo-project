var express = require('express');
var router = express.Router();
// bring in our mongoose model
var Appointment = require('../models/appointment');

router.post('/', function(req, res) {
  //console.log('post: ', req.body);
  var addedPerson = new Appointment (req.body);

  addedPerson.save(function(err, data) {
    console.log('save data:', data);
    if(err) {
      console.log('ERR: ', err);
      res.sendStatus(500);
    } else {
      res.send(data);
      // res.sendStatus(201);
    }
  });
});

router.get('/', function(req, res) {

  Appointment .find({}, function(err, people) {
      //console.log("token ", req.decodedToken);
    if(err) {
      console.log('Get ERR: ', err);
      res.sendStatus(500);
    } else {
      res.send(people);
    }
  });
});

router.put('/:id', function(req, res) {
  console.log('in the put method', req.params.id);
  Appointment .findByIdAndUpdate(
    { _id: req.params.id },
    { $set: { name: req.body.name, email: req.body.email, number: req.body.number, date: req.body.date, time: req.body.time } },
    function(err, data){
      if(err){
        console.log('Put ERR: ', err);
        res.sendStatus(500);
      } else {
        res.sendStatus(200);
      }
  })
});

router.get('/:id', function(req, res) {
  //console.log("get by id:  ", req.params.id);
  //console.log("req.body ", req.body);
  Appointment.findOne(
    { _id: req.params.id},
    function(err, data){
      if(err){
        console.log('get/:id ERR: ', err);
        res.sendStatus(500);
      } else {
        console.log("the data ", data);
        res.send(data);
      }
    }
  )
});

router.delete('/:id', function(req, res){
  console.log('delete route: ', req.body);
  Appointment.findByIdAndRemove(
    { _id: req.params.id },
    function(err, data){
      if(err){
        console.log('Delete ERR: ', err);
        res.sendStatus(500);
      } else {
        res.sendStatus(200);
      }
    }
  )
});

module.exports = router;
