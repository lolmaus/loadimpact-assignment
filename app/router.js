import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('requests', Ember.K); // This route should have default subroutes
});

export default Router;
