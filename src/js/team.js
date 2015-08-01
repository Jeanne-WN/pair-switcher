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

  return {
    add: add,
    members: teamMember
  }
}
