import DS from 'ember-data';

export default DS.Model.extend({
  description: DS.attr(),
  goalamount: DS.attr(),
  units: DS.attr(),
  user: DS.belongsTo('user', { async: true })
});
