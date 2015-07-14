import Ember from 'ember';

export default Ember.Component.extend({

  // INCOMING PROPERTIES
  page:       null,
  totalPages: null,
  maxShown:   5,

  // OVERRIDDEN STATIC PROPERTIES
  classNames:        'pagiNator',
  classNameBindings: [
    'pagesBeforeClass',
    'pagesAfterClass',
    'pagesBeforeExtra:-pagesBeforeExtra',
    'pagesAfterExtra:-pagesAfterExtra'
  ],
  attributeBindings: ['data-eq-pts'],

  // CUSTOM STATIC PROPERTIES
  'data-eq-pts': 'size6: 0, size5: 240, size4: 260, size3: 280, size2: 300, size1: 320',

  // COMPUTED PROPERTIES
  pagesBefore: Ember.computed('page', function() {
    let result   = [];
    let prevPage = this.get('page') - 1;

    if (prevPage <= 0) { return result; }

    for (var i = prevPage; i > 0; i--) {
      if (prevPage - i >= this.get('maxShown')) { break; }
      result.push(i);
    }

    return result.reverse();
  }),

  pagesAfter: Ember.computed('page', 'totalPages', function() {
    let result = [];
    let nextPage = this.get('page') + 1;
    let totalPages = this.get('totalPages');

    if (nextPage > totalPages) { return result; }

    for (let i = nextPage; i <= totalPages; i++) {
      if (i - nextPage >= this.get('maxShown')) { break; }
      result.push(i);
    }

    return result;
  }),

  pagesBeforeExtra: Ember.computed('page', 'maxShown', function() {
    return this.get('page') - this.get('maxShown') > 1;
  }),

  pagesAfterExtra: Ember.computed('page', 'maxShown', 'totalPages', function() {
    return this.get('page') + this.get('maxShown') < this.get('totalPages');
  }),

  pagesBeforeClass: Ember.computed('pagesBefore', function() {
    let len = this.get('pagesBefore.length');

    if (len)
      return "-before-" + len;
  }),

  pagesAfterClass: Ember.computed('pagesAfter', function() {
    let len = this.get('pagesAfter.length');

    if (len)
      return "-after-" + len;
  }),

  prevPage: Ember.computed('page', function() {
    let page = this.get('page') - 1;
    if (page > 1) return page;
  }),

  nextPage: Ember.computed('page', 'totalPages', function() {
    let page = this.get('page') + 1;
    if (page < this.get('totalPages')) return page;
  }),

});
