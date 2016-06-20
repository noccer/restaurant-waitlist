var restful = require('node-restful');
var Resource = require('resourcejs');

module.exports = function(app, route) {

   // Setup the controller for REST;
   var rest_restaurant = restful.model(
      'restaurant',
      app.models.restaurant
   ).methods(['get', 'put', 'post', 'delete']);


   //register this endpoint with the application
   rest_restaurant.register(app, route);

   // return middleware
   return function(req, res, next) {
      next();
   };
};
