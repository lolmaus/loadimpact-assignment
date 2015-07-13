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
  },

  // ACTIONS
  actions: {
    pan: function(val) {
      console.log('pannn', val, this.$().width());

      if (val === "up" && this.$().width() <= 50) {
        this.set('modeIsDemo', true);
      }

      if (val === "down" && this.$().width() <= 50) {
        this.set('modeIsDemo', false);
      }

      if (val === "left" && this.$().width() > 50) {
        this.set('modeIsDemo', false);
      }

      if (val === "right" && this.$().width() > 50) {
        this.set('modeIsDemo', true);
      }
    }
  }

});
