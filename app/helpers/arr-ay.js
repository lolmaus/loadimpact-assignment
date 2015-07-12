import Ember from 'ember';

// Passes the array through, useful for HBS
export function arrAy(params/*, hash*/) {
  params.pop(); // Getting rid of metadata
  return params;
}

export default Ember.Helper.helper(arrAy);
