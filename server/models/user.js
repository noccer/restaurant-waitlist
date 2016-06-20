var mongoose = require('mongoose');

// Create the CustomerSchema.
var UserSchema = new mongoose.Schema({
   username: {
      type: String,
      required: true
   },
   email: {
      type: String,
      required: true
   },
   password: {
      type: String,
      required: true
   },

 });

// Export the model.
module.exports = mongoose.model('user', UserSchema);
