import Ember from 'ember';

export default Ember.Controller.extend({

  // REQUIRED
  model: [],

  // QUERY PARAMS
  queryParams: ['page', 'limit', 'sortBy', 'sortOrder'],
  page:        Ember.computed.alias('requestsController.page'),
  limit:       Ember.computed.alias('requestsController.limit'),
  sortBy:      Ember.computed.alias('requestsController.sortBy'),
  sortOrder:   Ember.computed.alias('requestsController.sortOrder'),

  // STATIC PROPERTIES
  requestsController: Ember.inject.controller('requests'),

  requestTitles: {
    id:     'ID',
    url:    'URL',
    method: 'Method',
    foo:    'Foo',
    bar:    'Bar',
    baz:    'Baz'
  },

  // ACTIONS
  actions: {

  }
});
