// appointment model
var mongoose = require('mongoose');
var moment = require('moment');

var AppointmentSchema = new mongoose.Schema(
  {
    name: String,
    phoneNumber: String,
    timeZone: String,
    time: {type : Date, index: true}
  });

var Appointment = mongoose.model('appointment', AppointmentSchema);
module.exports = Appointment;
