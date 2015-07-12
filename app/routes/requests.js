import Ember from 'ember';

export default Ember.Route.extend({

  // OVERRIDDEN METHODS
  setupController: function(controller, model) {
    this._super(controller, model);
    return this.store
      .adapterFor('request')
      .requestTotalCount()
      .then(metadata => controller.set('totalCount', metadata.totalCount));
  }
});

