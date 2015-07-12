import Ember from 'ember';

export function miNus(params/*, hash*/) {
  return params.reduce(function(a, b) { return a - b; });
}

export default Ember.Helper.helper(miNus);
