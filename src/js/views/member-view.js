var app = app || {};

app.MemberView = Backbone.View.extend({
  tagName: 'li',
  className: 'clearfix',
  template: _.template($('#member-template').html()),

  events: {
    "click .close": "removeMember"
  },

  render: function(){
    this.$el.html(this.template(this.model.attributes))
    return this;
  },

  removeMember: function(){
    this.model.destroy();
    this.remove();
  }
});
