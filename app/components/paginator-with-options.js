import Ember from 'ember';

export default Ember.Component.extend({

  // INCOMING PROPERTIES
  page:           null,
  totalPages:     null,
  maxShown:       5,
  pagesList:      null,
  availablePages: null,
  limit:          null,
  sortByList:     null,
  sortBy:         null,
  sortOrder:      null,

  // OVERRIDDEN STATIC PROPERTIES
  classNames:        'paginatorWithOptions',
  classNameBindings: 'optionsVisible:-optionsVisible',
  attributeBindings: ['data-eq-pts'],

  // STATIC PROPERTIES
  'data-eq-pts':  'size5: 240, size4: 260, size3: 280, size2: 300, size1: 320',
  optionsVisible: false,
  $options:       null, // to be set in didInsertElement

  // OVERRIDDEN METHODS
  didInsertElement () {
    var $options = this.$('.paginatorWithOptions-options');
    this.set('$options', $options);
  },

  // OBSERVERS
  toggle$options: Ember.observer('optionsVisible', '$options', function() {
    var $options = this.get('$options');

    if (this.get('optionsVisible')) {
      $options.slideDown();
    } else {
      $options.slideUp();
    }
  }),

  // ACTIONS
  actions: {
    toggleOptions () {
      this.toggleProperty('optionsVisible');
    },

    pageChanged (value) {
      this.set('page', value);
    },

    limitChanged (value) {
      this.set('limit', value);
    },

    sortByChanged (value) {
      this.set('sortBy', value);
    },

    sortOrderChanged (value) {
      this.set('sortOrder', value);
    }
  }
});
