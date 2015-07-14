import Ember from 'ember';

export default Ember.Component.extend({

  // INCOMING PROPERTIES
  checked: null,

  // OVERRIDDEN PROPERTIES
  classNames: 'checkBox',

  // COMPUTED PROPERTIES
  randomId: Ember.computed(function() {
    return Math.random().toString(36).slice(2);
  }),

  // ACTIONS
  actions: {
    changed (val) {
      this.set('checked', val);
      //this.get('target').send('changed', val);
    }
  }
});
