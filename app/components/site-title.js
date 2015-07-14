import Ember from 'ember';

export default Ember.Component.extend({
  // OVERRIDDEN STATIC PROPERTIES
  classNames:        'siteTitle',
  attributeBindings: ['data-eq-pts'],

  // CUSTOM STATIC PROPERTIES
  'data-eq-pts':     'small: 0, medium: 300, large: 405'
});
