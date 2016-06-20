var mongoose = require('mongoose');

// Create the CustomerSchema.
var CustomerSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true
   },
   phone: {
      type: String,
      required: true
   },
   is_vip: {
      type: Boolean,
      default: false
   },
   heads: {
      type: Number,
      required: true
   },
   started_waiting: {
      type: Date,
      default: Date.now,
      required: true
   },
   eta: {
      type: Number,
      required: true
   },
   finished_waiting: {
      type: Date,
      required: true
   }
});

// Export the model.
module.exports = mongoose.model('customer', CustomerSchema);
