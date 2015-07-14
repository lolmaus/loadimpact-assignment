import Ember from 'ember';
import Request from 'loadimpact-assignment/models/request';

export default Ember.Controller.extend({

  // ATTRIBUTES
  totalCount: null,
  page:       1,
  limit:      100,
  sortBy:     Ember.computed.alias('sortByList.firstObject'),
  sortOrder:  'asc',

  // STATIC PROPERTIES
  availablePages: [10, 50, 100, 250],
  modeIsDemo: false,

  // COMPUTED PROPERTIES
  pagesCount: Ember.computed('totalCount', 'limit', function() {
    return Math.ceil(this.get('totalCount') / this.get('limit'));
  }),

  pagesList: Ember.computed('pagesCount', function() {
    // Producing a range [1 .. pagesCount]]
    return Array
      .apply(null, {length: this.get('pagesCount')})
      .map((e, i) => i + 1);
  }),

  // List of sort columns is extracted from the model
  sortByList: Ember.computed(function() {
    var attrsMap = Ember.get(Request, 'attributes');
    var sortByList = ['id'];

    // Have to do this to avoid using the Map's private ._keys
    attrsMap.forEach((val, key) => sortByList.push(key));

    return sortByList;
  }),


  // OBSERVERS
  adherePageToLimit: Ember.observer('page', 'pagesCount', function() {
    var pagesCount = this.get('pagesCount');

    if (pagesCount < 1) {
      this.set('page', 1);
      return;
    }

    if (this.get('page') > pagesCount)
      this.set('page', pagesCount);
  })

});
