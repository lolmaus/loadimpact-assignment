import DS from 'ember-data';

export default DS.Model.extend({

  // ATTRIBUTES
  method: DS.attr('string'),
  url:    DS.attr('string'),
  foo:    DS.attr('number'),
  bar:    DS.attr('number'),
  baz:    DS.attr('number')
});
