import {makeHeroElement} from "./hero_element.js"

var test_hero_data = {"win_percent": 0.8, "loss_percent": 0.2};
var default_hero_data = "/static/json/default.json"

$(document).ready(function() {
    $("#test_div").append(makeHeroElement(5, test_hero_data));
    makeHeroList(default_hero_data, "#test_div")
});

function makeHeroList(json_path, target) {
  $.getJSON(json_path).done( function(data) {
    $.each( data, function(hero_id, hero_data){
      // Add hero to the div
      $(target).append(makeHeroElement(hero_id, hero_data))
      // Store the heroes json for future usage in charts for example
      $(`#pick_${hero_id}`).data("json", hero_data)
    }
    );
  }

  )
}

function make_sel_id(names){
  return (names.sort()).join()
}

var picked_heroes = []
var selectionCache = {}


function changeHero(picked_heroes,
                     accessor=element => {return element[hero_data]}) {
  // var names = []
  // picked_heroes.forEach(element => {
  //   names.append[element['name']]
  // });
  var pick_advantages = {}
  picked_heroes.forEach(element => {
    var h_data = accessor(element);
    for(advantage, hero in h_data){
      if(hero in pick_advantages){
        pick_advantages[hero] += advantage;
      }
      else{
        pick_advantages[hero] = advantage;
      }
    }
  });

}