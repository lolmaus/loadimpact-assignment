import Ember from 'ember';

export function conCat(params/*, hash*/) {
  return params[0] + params[1];
}

export default Ember.Helper.helper(conCat);
