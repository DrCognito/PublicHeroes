import {makeHeroElement} from "./hero_element.js"
import {updateCharts} from "./charts.js"

var test_hero_data = "static/json/default.json"
var picked_heroes = []
var data_sets = {
  "default": {
    "hero_data": "static/json/odotaAdvantages.json",
    "accessor": (element) => $(element).data("json"),
  }
};
var data = data_sets['default']

$(document).ready(function() {
  // Add our heros for the picking
  makeHeroList(data['hero_data'], "#hero_picker")
});

function makeHeroList(json_path, target) {
  $.getJSON(json_path).done( function(data) {
    $.each( data, function(hero_id, hero_data){
      // Add hero to the div
      $(target).append(makeHeroElement(hero_id, hero_data));
      // Store the heroes json for future usage in charts for example
      var new_hero = $(`#pick_${hero_id}`);
      new_hero.data("json", hero_data);
      // Add click handler
      new_hero.click( function(){
        $(this).toggleClass("hero_picked");
        update_heroes();
      });
    }
    );
  }

  )
}

function make_sel_id(names){
  return (names.sort()).join()
}


function update_heroes(){
  // Get our picked heroes from the DOM
  picked_heroes = $(".hero_picked").toArray();
  // Calculate advantages
  var advantages = changeHero(data['accessor']);
  // Picked hero names for charts
  var hero_names = [];
  picked_heroes.forEach(element => {
    var h_data = data['accessor'](element);
    hero_names.push(h_data['name']);
  });
  if (hero_names.length != 0){
    updateCharts(advantages, hero_names, $("#graphs"));
  }
  else{
    $("#graphs").empty();
  }
}


function changeHero(accessor){
  var pick_advantages = {}
  picked_heroes.forEach(element => {
    var h_data = accessor(element);
    var h_adv = h_data['advantages']
    for (const hero in h_adv){
      const advantage = h_adv[hero]
      if (hero in pick_advantages){
        pick_advantages[hero] += advantage;
      }
      else{
        pick_advantages[hero] = advantage;
      }
    }
  });
  return pick_advantages
}