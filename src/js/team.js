function Team(localStorageName) {
  'use strict';
  var teamMember = JSON.parse(window.localStorage.getItem(localStorageName)) || [];

  function add(member) {
    teamMember.push(member);
    updateLocalStorage();
    return this;
  }

  function updateLocalStorage() {
    window.localStorage.setItem(localStorageName, JSON.stringify(teamMember));
  }

  function remove(member) {
    teamMember = _.reject(teamMember, function(m) {
      return m.name == member.name && m.isTyro == member.isTyro;
    });

    updateLocalStorage();
    return this;
  }

  function members(){
    return teamMember;
  }

  return {
    add: add,
    remove: remove,
    members: members
  }
}
