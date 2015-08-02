var app = app || {};

$(function(){
  var team = new app.Team();
  new app.TeamView(team);
});
