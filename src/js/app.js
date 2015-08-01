$(function(){
  'use strict';

  var team = new Team('pair-switcher:team-member'),
      membersView = new MembersView($('.member-list'));

  membersView.draw(team.members);

  function addMember(){
    var newMember = {
      name: $('input[name=name]').val(),
      isTyro: $('input[name=tyro]:checked').length == 1
    };

    membersView.draw(team.add(newMember).members);
  }

  $('#addMember').click(addMember);
});
