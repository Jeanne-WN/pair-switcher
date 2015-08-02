function MembersView(container) {
  'use strict';

  function draw(members) {
    clearContainer();
    if(members.length > 0) {
      container.append(generateMemberList(members));
    }
  }

  function generateMemberList(members) {
    var compiled = _.template( "<li class='clearfix'>"
                               + "<strong><%- name %></strong>"
                               + "<span class='close'>&times;</span>"
                               + "</li>");

    var items = _.reduce(members, function(lists, member) {
      var name = member.isTyro ? member.name + "(Tyro)" : member.name;

      return lists + compiled({name: name});
    }, "");

    return "<ul class='list-unstyled'>" + items + "</ul>"
  }

  function clearContainer() {
    $("ul", container).remove();
  }

  function parse(str) {
    var name = str.split("(")[0],
        isTyro = str.search('(Tyro)') > -1;

    return {
      name: name,
      isTyro: isTyro
    }
  }

  return {
    draw: draw,
    parse: parse
  }
}
