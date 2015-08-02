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
      return _.isEqual(member, m);
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
