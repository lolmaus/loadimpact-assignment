import Ember from 'ember';

export default Ember.Component.extend({

  // ICONMING PROPERTIES
  request: null,
  fake:    false,

  // OVERRIDDEN PROPERTIES
  classNames:        'reqUest',
  classNameBindings: 'fake:-fake',
  attributeBindings: 'data-eq-pts',

  // STATIC PROPERTIES
  'data-eq-pts':  'small: 0, large: 600'
});
