var app = app || {};

app.TeamView = Backbone.View.extend({
  el: '.team',
  template: _.template("<ul class='list-unstyled team-list'></ul>"),
  initialize: function(team){
    this.team = team;
    this.listenTo(this.team, 'add', this.addMember);
    this.render();
    this.team.fetch();
  },

  events: {
    "click #addMember": "createMember"
  },

  render: function(){
    this.$el.append(this.template);
  },

  addMember: function(member){
    var memberView = new app.MemberView({model: member});
    $('ul.team-list').append(memberView.render().el);
  },

  createMember: function(e){
    var name = this.$('input[name=name]').val(),
        isTyro = this.$('input[name=tyro]:checked').length > 0;

    var member = new app.Member({name: name, isTyro: isTyro});
    if(member.isValid()){
        this.team.create(member);
        
        this.$('input[name=name]').val("");
        this.$('input[name=tyro]').attr('checked', false);
    }else{
      alert(member.validationError);
    }
  }
});
