var restful = require('node-restful');
var Resource = require('resourcejs');

module.exports = function(app, route) {

  // Setup the controller for REST;
  var rest_customer = restful.model(
    'customer',
    app.models.customer
  ).methods(['get', 'put', 'post', 'delete']);

//register this endpoint with the application
rest_customer.register(app, route);

// return middleware
return function(req, res, next) {
   next();
};
};
