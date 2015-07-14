import Ember from 'ember';

export default Ember.Component.extend({

  // INCOMING PROPERTIES
  width: 320,
  height: 240,

  // OVERRIDDEN PROPERTIES
  classNames: 'intrinsicRatio',
  attributeBindings: 'style',

  style: Ember.computed('width', 'height', function() {
    var padding = this.get('height') / this.get('width') * 100;

    return `padding-top: ${padding}%;`;
  })
});
