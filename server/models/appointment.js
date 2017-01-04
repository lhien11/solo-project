var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// step 1: create the Schema
var appointmentSchema = new Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  number: {type: String, required: true},
  date: {type: Date, required: true},
  time: {type: String, required: true}
});

appointmentSchema.pre('save', function(next) {
  next();
});

// step 2 - create the model
var Appointment = mongoose.model('Appointment', appointmentSchema);

// step 3 - export our model
module.exports = Appointment;
