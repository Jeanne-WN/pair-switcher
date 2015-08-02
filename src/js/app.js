$(function(){
  'use strict';

  var team = new Team('pair-switcher:team-member'),
      membersView = new MembersView($('.member-list')),
      pairView = new PairView($('.result'));

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

  function pair(first, second) {
    var less, more, results;

    if(first.length > second) {
      more = _.clone(first);
      less = _.clone(second);
    }else{
      more = _.clone(second);
      less = _.clone(first);
    }

    results = _.reduce(less, function(memo, item){
      memo.push([item, more.pop()]);
      return memo;
    }, []);

    while(more.length > 0){
      results.push([more.pop(), more.pop()]);
    }

    return results;
  }

  function switchPair() {
    var members = _.partition(team.members(), function(member){ return member.isTyro });
    pairView.draw(pair(_.shuffle(members[0]), _.shuffle(members[1])));
  }

  $('#addMember').click(addMember);
  $('.member-list').on('click', '.close', removeMember);
  $('#switchPair').click(switchPair);
});
