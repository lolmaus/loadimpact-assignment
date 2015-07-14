import Ember from 'ember';

export default Ember.Route.extend({

  // OVERRIDDEN METHODS
  beforeModel () {
    this.transitionTo('requests');
  }
});
