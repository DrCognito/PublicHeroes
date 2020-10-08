google.charts.load('current', {packages: ['corechart', 'bar']});

var chartStore = {}
var defaultLimit = 10
var defaultOptions = {
    title: 'Advantages',
    chartArea: {width: '70%'},
    hAxis: {
      title: 'Total Advantage',
      minValue: 0
    },
    vAxis: {
      title: 'Hero'
    }
};
var chart = null;

function drawChart(data, target_div, options=defaultOptions){
    chart = new google.visualization.BarChart(target_div[0]);
    console.log(data)
    chart.draw(data, options);
}


function advSort(a, b){
    if (a[1] < b[1]){
        return -1
    }
    if (a[1] > b[1]){
        return 1
    }
    return 0
}

function advantageDictToList(in_dict, highLights=[], sortfunction=advSort){
    var normal_style = "blue";
    var highlight_style = "red";

    var outList = [];
    for (const hero in in_dict){
        const advantage = in_dict[hero]
        if(highLights.includes(hero)){
            console.log(`Highlighted ${hero}`)
            outList.push([hero, advantage, highlight_style]);
        }
        else{
            outList.push([hero, advantage, normal_style]);
        }
    }

    outList.sort(sortfunction)
    outList.reverse()
    return outList
}

function advantageListToDataTable(in_list, defaultLimit){
    // Add header
    var output = [
        ['Hero', 'Advantage vs pics', { role: 'style'} ],
    ]
    // This is "destructuring"!
    output = [...output, ...in_list.slice(0, defaultLimit - 1)]
    return google.visualization.arrayToDataTable(output)
}


function updateCharts(advantages, picks, target_div){
    console.log("Updating charts.")
    if (chart != null && $.isEmptyObject(advantages)){
        chart.clearChart();
    }
    var _adv_list = advantageDictToList(advantages, picks);
    var data_table = advantageListToDataTable(_adv_list, defaultLimit);
    drawChart(data_table, target_div);
}
export { advantageDictToList, drawChart, updateCharts }