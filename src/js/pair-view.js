function PairView(container){
  'use strict';

  function draw(pairs){
    clearContainer();
    if(pairs.length > 0) {
      container.append(generatePairList(pairs));
    }
  }

  function clearContainer() {
    $("ul", container).remove();
  }

  function generatePairList(pairs) {
    var compiledPair = _.template( "<li>"
                               + "<%- firstName %>"
                               + " - "
                               + "<%- secondName %>"
                               + "</li>"),
        compiledSolo = _.template( "<li>"
                                   + "<%- name %>"
                                   + "</li>");

    var items = _.reduce(pairs, function(lists, pair) {
      if (pair[1]) {
        return lists + compiledPair({firstName: pair[0].name, secondName: pair[1].name});
      }else{
        return lists + compiledSolo({name: pair[0].name});
      }
    }, "");

    return "<ul class='list-unstyled'>" + items + "</ul>"
  }


  return {
    draw: draw
  }
}
