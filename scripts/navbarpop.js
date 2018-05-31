var hierarchy = 'http://my-little-cors-proxy.herokuapp.com/http://api.sportradar.us/mlb/trial/v6.5/en/league/hierarchy.json?api_key=g853qfg7gsw5eztfz77uvyfx';

function getTeamNames(data) {
    // $.get(hierarchy, function(data) {
        teamNames = [];
        // teamIDS = [];
        var vals = Object.values(data);
        var next = Object.values(vals);
        var blue = next[1];
        blue.forEach(function(stuff) {
            var green = Object.values(stuff);
            var green3 = green[3];
            var again = Object.keys(green3);
            // console.log(green3.)
            again.forEach(function(hey) {
                var newVar = green3[hey];
                var newNew = Object.values(newVar);
                var newNew3 = newNew[3];
                var newVal = Object.keys(newNew3);
                newVal.forEach(function(here) {
                    var hmmm = newNew3[here];
                    // console.log(hmmm);
                    teamNames.push(hmmm.name);
                    // teamIDS.push(hmmm.id)
                    // return teamIDS;
                    // return teamNames;
                })
            })
        })
       return(teamNames);
    //    return(teamIDS);
}
    
function getTeamIDS(data) {
    // $.get(hierarchy, function(data) {
        // teamNames = [];
        teamIDS = [];
        var vals = Object.values(data);
        var next = Object.values(vals);
        var blue = next[1];
        blue.forEach(function(stuff) {
            var green = Object.values(stuff);
            var green3 = green[3];
            var again = Object.keys(green3);
            // console.log(green3.)
            again.forEach(function(hey) {
                var newVar = green3[hey];
                var newNew = Object.values(newVar);
                var newNew3 = newNew[3];
                var newVal = Object.keys(newNew3);
                newVal.forEach(function(here) {
                    var hmmm = newNew3[here];
                    // console.log(hmmm);
                    // teamNames.push(hmmm.name);
                    teamIDS.push(hmmm.id)
                    // return teamIDS;
                    // return teamNames;
                })
            })
        })
    //    return(teamNames);
       return(teamIDS);
}
    

function popTeamNames(teamNames) {
    teamNames.forEach(function(name) {
        var newSelector = $(`<option value=${name}>${name}</option>`);
        $('[data-target-teams]').append(newSelector);
    })
}

function getPlayerPositions(teamIDS) {
    var positions = [];
    var urlAddon = teamIDS[0];
    newURL = ('http://my-little-cors-proxy.herokuapp.com/http://api.sportradar.us/mlb/trial/v6.5/en/teams/' + urlAddon + '/profile.json?api_key=bacyjb6cyn45qk6zdcz6hfeg')
    $.get(newURL, function(data) {
        var playerArray = data.players
        playerArray.forEach(function(stuff){
            positions.push(stuff.primary_position);
        })
        console.log(positions);
    })


}

function startTheProgram(URL){ 
    var ajaxRequest = $.get(URL);
    
    ajaxRequest
    .then(getTeamNames)
    .then(popTeamNames)
}

function nextStep(URL){
    var ajaxRequest = $.get(URL);

    ajaxRequest
    .then(getTeamIDS)
    .then(getPlayerPositions)
}

startTheProgram(hierarchy);
nextStep(hierarchy);
