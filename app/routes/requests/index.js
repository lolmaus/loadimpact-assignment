import Ember from 'ember';

export default Ember.Route.extend({

  // OVERRIDDEN PROPERTIES
  queryParams: {
    page:      {refreshModel: true},
    limit:     {refreshModel: true},
    sortBy:    {refreshModel: true},
    sortOrder: {refreshModel: true}
  },

  // OVERRIDDEN METHODS
  model (params) {
    return this.store.query('request', {
      page:      params.page,
      limit:     this.allowedLimit( params.limit ),
      sortBy:    params.sortBy,
      sortOrder: params.sortOrder
    });
  },

  setupController (controller, model) {
    this._super(controller, model);

    let totalCount = this.store.metadataFor('request').totalCount;

    this
      .controllerFor('requests')
      .set('totalCount', totalCount);
  },

  // CUSTOM METHODS
  allowedLimit (suggestedLimit) {
    suggestedLimit = parseInt(suggestedLimit, 10);
    if (isNaN(suggestedLimit) || !isFinite(suggestedLimit)) return 100;
    if (suggestedLimit < 1) return 10;
    if (suggestedLimit > 250) return 250;
    return suggestedLimit;
  },

  // ACTIONS
  actions: {
    loading () {
      window.scrollTo(0, 0);
      return true; // Let the action bubble through
    }
  }
});
