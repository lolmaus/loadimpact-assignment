import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  shouldReloadAll: function() { return false; },
  shouldBackgroundReloadAll: function() { return true; }
});
