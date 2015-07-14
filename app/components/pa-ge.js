import Ember from 'ember';

export default Ember.Component.extend({

  // INCOMING PROPERTIES
  modeIsDemo: null,

  // OVERRIDDEN STATIC PROPERTIES
  classNames:        'paGe',
  classNameBindings: ['modeIsDemo:-modeIsDemo'],
  attributeBindings: ['data-eq-pts'],

  // CUSTOM STATIC PROPERTIES
  'data-eq-pts': 'small: 0, medium: 550, large: 800, huge: 1025'
});
