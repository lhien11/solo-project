var express = require('express');
var router = express.Router();
var momentTimeZone = require('moment-timezone');
var moment = require('moment');
var Appointment = require('../models/appointment');

var getTimeZones = function(){
  return momentTimeZone.tz.names();
}

// GET: /appointments
router.get('/', function(req, res, next) {
  Appointment.find()
    .then(function (appointments) {
      res.render('appointments/index', { appointments: appointments });
    });
});
