import Ember from 'ember';

export default Ember.Controller.extend({

  // REQUIRED
  model: [],

  // OVERRIDDEN PROPERTIES
  needs: ['requests'],

  // QUERY PARAMS
  queryParams: ['page', 'limit', 'sortBy', 'sortOrder'],
  page:        Ember.computed.alias('controllers.requests.page'),
  limit:       Ember.computed.alias('controllers.requests.limit'),
  sortBy:      Ember.computed.alias('controllers.requests.sortBy'),
  sortOrder:   Ember.computed.alias('controllers.requests.sortOrder'),

  // STATIC PROPERTIES
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
