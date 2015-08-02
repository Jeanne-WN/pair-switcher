$(function(){
  'use strict';

  var team = new Team('pair-switcher:team-member'),
      membersView = new MembersView($('.member-list'));

  membersView.draw(team.members());

  function addMember(){
    var newMember = {
      name: $('input[name=name]').val(),
      isTyro: $('input[name=tyro]:checked').length == 1
    };

    membersView.draw(team.add(newMember).members());

    $('input[name=name]').val('');
    $('input[name=tyro]:checked').prop('checked', false)
  }

  function removeMember() {
    var member = membersView.parse(this.parentElement.firstChild.innerText);
    membersView.draw(team.remove(member).members());
  }

  $('#addMember').click(addMember);
  $('.member-list').on('click', '.close', removeMember);
});
