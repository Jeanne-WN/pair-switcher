var app = app || {};

app.Team = Backbone.Collection.extend({
  model: app.Member
});
