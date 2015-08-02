var app = app || {};

app.MemberView = Backbone.View.extend({
  tagName: 'li',
  className: 'clearfix',
  template: _.template($('#member-template').html()),
  
  render: function(){
    this.$el.html(this.template(this.model.attributes))
    return this;
  }
});
