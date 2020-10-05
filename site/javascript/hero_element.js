function makeHeroElementWL(heroID, data){
    var htmlOut = "<table>";
    // Hero icon / portrait, whatever
    htmlOut += "<tr>"
    htmlOut += `<td columnpan="2", style="text-align:center;"><i class="d2mh hero-${heroID}", style="text-align:center;"></i></td>`

    htmlOut += "<tr>"
    // Win rate
    htmlOut += `<td class="win_per">${data['win_percent']}`
    // Loss rate
    htmlOut += `<td class="loss_per">${data['loss_percent']}</td></tr>`;

    htmlOut += "</table>";

    return htmlOut
}


function makeHeroElement(heroID, data){
    var htmlOut = "<table, class='hero_picker'>";
    // Hero icon / portrait, whatever
    htmlOut += "<tr>"
    htmlOut += `<td><i id="pick_${heroID}", class="d2mh hero-${heroID}", style="text-align:center;"></i></td>`
    htmlOut += "</tr>"
    htmlOut += "</table>";

    return htmlOut
}

export { makeHeroElement, makeHeroElementWL }