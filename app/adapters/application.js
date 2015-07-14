import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({

  // Restoring the old-school Ember Data behavior
  shouldReloadAll ()           { return true; },
  shouldBackgroundReloadAll () { return false; }

});
