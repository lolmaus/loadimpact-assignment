import Ember from 'ember';

export default Ember.Component.extend({

  // INCOMING PROPERTIES
  modeIsDemo: false,

  // OVERRIDDEN PROPERTIES
  classNames: 'demoDesc',

  // OVERRIDDEN METHODS
  click: function(evt) {
    //if ($(evt.target).closest('.checkBox').length) return;
    this.toggleProperty('modeIsDemo');
  }

});
