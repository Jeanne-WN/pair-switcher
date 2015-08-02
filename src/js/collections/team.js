var app = app || {};

app.Team = Backbone.Collection.extend({
  model: app.Member,
  localStorage: new Backbone.LocalStorage('pair-switcher:team')
});
