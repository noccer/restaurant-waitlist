var restful = require('node-restful');
var Resource = require('resourcejs');

module.exports = function(app, route) {

   // Setup the controller for REST;
   var rest_user = restful.model(
      'user',
      app.models.user
   ).methods(['get', 'put', 'post', 'delete']);


   //register this endpoint with the application
   rest_user.register(app, route);

   // return middleware
   return function(req, res, next) {
      next();
   };
};
