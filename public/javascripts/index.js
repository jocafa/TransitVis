/**
 * Module dependencies
 */

var app = module.exports = require('simple-ui')('TransitVis', [
  require('ng-hyper-emitter-ws').name
], require);

/**
 * Initialize aux partials
 */
app.initPartial('header');
app.initPartial('sidenav');
app.initPartial('footer');


/**
 * Initialize the directives
 */


/**
 * Start the app
 */

app.start(function($injector) {
  var emitter = $injector.get('hyperEmitterWs');
  emitter({port: 80, host: 'hyper-emitter.herokuapp.com'});
});
