var app = app || {};

app.Member = Backbone.Model.extend({
  validate: function(attrs) {
    if(attrs.name == "") {
      return 'Name is required.';
    }
  }
});
