var mongoose = require('mongoose');

// Create the CustomerSchema.
var RestaurantSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true
   },
   website: {
      type: String,
      required: true
   },
   phone: {
      type: String,
      required: true
   },
   address: {
      type: String,
      required: true
   },
   suburb: {
      type: String,
      required: true
   },
   postcode: {
      type: String,
      required: true
   }
});

// Export the model.
module.exports = mongoose.model('restaurant', RestaurantSchema);
