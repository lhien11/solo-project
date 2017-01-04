var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// step 1: create the Schema
var contactSchema = new Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  number: {type: Number, required: true}
});

contactSchema.pre('save', function(next) {
  next();
});

// step 2 - create the model
var Contact = mongoose.model('Contact', contactSchema);

// step 3 - export our model
module.exports = Contact;
