google.charts.load('current', {packages: ['corechart', 'bar']});

var chartStore = {}
var defaultLimit = 10

function drawChart(data, tardiv, options=defaultOptions, limit=defaultLimit){

}

function advantageDictToList(in_dict, highLights=[]){
    normal_style = "blue";
    highlight_style = "red";

    outList = [];
    for(advantage, hero in in_dict){
        if(hero in highLights){
            outList.append([hero, advantage, highlight_style]);
        }
        else{
            outList.append([hero, advantage, normal_style]);
        }
    }

    return outList
}

export { advantageDictToList, drawChart }