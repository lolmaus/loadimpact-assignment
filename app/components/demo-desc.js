import Ember from 'ember';

export default Ember.Component.extend({

  // INCOMING PROPERTIES
  modeIsDemo: false,

  // OVERRIDDEN PROPERTIES
  classNames: 'demoDesc',

  // OVERRIDDEN METHODS
  click () {
    //if ($(evt.target).closest('.checkBox').length) return;
    this.toggleProperty('modeIsDemo');
    this.scrollToTop();
  },

  // CUSTOM METHODS
  scrollToTop () {
    window.scrollTo(0, 0);
  },

  // ACTIONS
  actions: {
    pan (val) {
      if (val === "up" && this.$().width() <= 50) {
        this.set('modeIsDemo', true);
        this.scrollToTop();
      }

      if (val === "down" && this.$().width() <= 50) {
        this.set('modeIsDemo', false);
        this.scrollToTop();
      }

      if (val === "left" && this.$().width() > 50) {
        this.set('modeIsDemo', false);
        this.scrollToTop();
      }

      if (val === "right" && this.$().width() > 50) {
        this.set('modeIsDemo', true);
        this.scrollToTop();
      }
    }
  }

});
