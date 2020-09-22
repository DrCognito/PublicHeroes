function makeHeroElement(heroID, data){
    var htmlOut = "<table>";
    // Hero icon / portrait, whatever
    htmlOut += "<tr>"
    htmlOut += `<td rowspan="2"><i class="d2mh hero-${heroID}"></i></td>`

    htmlOut += "<tr>"
    // Win rate
    htmlOut += `<td class="win_per">${data['win_percent']}</td>`
    // Loss rate
    htmlOut += `<tr><td class="loss_per">${data['win_percent']}</td></tr>`;

    htmlOut += "</table>";

    return htmlOut
}