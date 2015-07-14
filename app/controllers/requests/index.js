import Ember from 'ember';

export default Ember.Controller.extend({

  // INCOMING PROPERTIES
  model: [],

  // QUERY PARAMS
  queryParams: ['page', 'limit', 'sortBy', 'sortOrder'],
  page:        Ember.computed.alias('requestsController.page'),
  limit:       Ember.computed.alias('requestsController.limit'),
  sortBy:      Ember.computed.alias('requestsController.sortBy'),
  sortOrder:   Ember.computed.alias('requestsController.sortOrder'),

  // CUSTOM STATIC PROPERTIES
  requestsController: Ember.inject.controller('requests'),

  requestTitles: {
    id:     'ID',
    url:    'URL',
    method: 'Method',
    foo:    'Foo',
    bar:    'Bar',
    baz:    'Baz'
  }
});
