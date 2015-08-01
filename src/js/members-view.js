function MembersView(container) {
  'use strict';

  function draw(members) {
    if(members.length > 0) {
      clearContainer();
      container.append(generateMemberList(members));
    }
  }

  function generateMemberList(members) {
    var items = _.reduce(members, function(lists, member) {
      var name = member.isTyro ? member.name + "(Tyro)" : member.name;

      return lists + "<li class='clearfix'>"
                   + "<strong>" + name + "</strong>"
                   + "<span class='close'>&times;</span>"
                   + "</li>"
    }, "");

    return "<ul class='list-unstyled'>" + items + "</ul>"
  }

  function clearContainer() {
    $("ul", container).remove();
  }

  return {
    draw: draw
  }
}
