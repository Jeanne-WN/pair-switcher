var app = app || {};

app.TeamView = Backbone.View.extend({
  tagName: 'ul',
  className: 'list-unstyled',

  initialize: function(){
    this.team = new app.Team([{name: "ni", isTyro: false}, {name: "wang", isTyro: true}]);
    this.render();
  },

  render: function(){
    this.team.each(function(member){
      this.renderMember(member);
    }, this);
    $('.team').append(this.el);
  },
  
  renderMember: function(member){
    var memberView = new app.MemberView({model: member});
    this.$el.append(memberView.render().el);
  }
});
