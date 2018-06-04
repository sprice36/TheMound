//cors proxy
//http://my-little-cors-proxy.herokuapp.com/

//league schedule API

// function dayCheck(){
//     var date = new Date().toLocaleTimeString();

//     if (localStorage.yourapp_date == date){
//         return false}
    
//     localStorage.yourapp_date = date;
//     return true;
// }

var myAPIKey = 'aq6af4a5htdq7eh68yf93cvr'
var myAPIKey2 = 'z8snf94begn37nrf5b7r9s5v'

var positionName = {
    "DH": "Hitter",
    "CF": "Center Field",
    "LF": "Left Field",
    "RF": "Right Field",
    "C": "Catcher",
    "SP": "Starting Pitcher",
    "RP": "Relief Pitcher",
    "SS": "Short Stop",
    "1B": "1ST Base",
    "2B": "2ND Base",
    "3B": "3RD Base",
};

var leagueScheduleAPI = 'http://my-little-cors-proxy.herokuapp.com/http://api.sportradar.us/mlb/trial/v6.5/en/games/2018/REG/schedule.json?api_key=' + myAPIKey2;

function pullScheduleAPI() {
    $.get(leagueScheduleAPI, function(data){
        libraryArray = [];
        var keys = Object.keys(data);
        console.log(keys);
     
       keys.forEach(function(aKey){
           var aLibrary = data[aKey];
           libraryArray.push(aLibrary);
           console.log(libraryArray);
        });
    });
    return(libraryArray);
}

//game boxscore API
var gameBoxscoreAPI = 'http://my-little-cors-proxy.herokuapp.com/http://api.sportradar.us/mlb/trial/v6.5/en/games/b6f922df-46c6-483c-8d3b-4235a6fc4520/boxscore.json?api_key=' + myAPIKey;

function pullGameBoxscoreAPI() {
    $.get(gameBoxscoreAPI, function(data){
        var libraryArray = [];
        var keys = Object.keys(data);
        console.log(keys);

        keys.forEach(function(aKey){
            var aLibrary = data[aKey];
            libraryArray.push(aLibrary);
            console.log(libraryArray);
         });
    });
}

//venues API 
var venuesAPI = 'http://my-little-cors-proxy.herokuapp.com/http://api.sportradar.us/mlb/trial/v6.5/en/league/venues.json?api_key=' + myAPIKey2;

function pullVenuesAPI() {
    $.get(venuesAPI, function(data){
        var libraryArray = [];
        var keys = Object.keys(data);
        console.log(keys);

        keys.forEach(function(aKey){
            var aLibrary = data[aKey];
            libraryArray.push(aLibrary);
            console.log(libraryArray);
         });
    });
}

//player profile API 
var playerAPI = 'http://my-little-cors-proxy.herokuapp.com/http://api.sportradar.us/mlb/trial/v6.5/en/players/6e1cac5c-b059-4b80-a267-5143b19efb27/profile.json?api_key=' + myAPIKey;

function pullPlayerAPI(){
    $.get(playerAPI, function(data){
        var libraryArray = [];
        var keys = Object.keys(data);
        console.log(keys);

        keys.forEach(function(aKey){
            var aLibrary = data[aKey];
            libraryArray.push(aLibrary);
            console.log(libraryArray);
         });
    });
}

//season statistics API
var seasonStatsAPI = 'http://my-little-cors-proxy.herokuapp.com/http://api.sportradar.us/mlb/trial/v6.5/en/seasons/2018/REG/teams/aa34e0ed-f342-4ec6-b774-c79b47b60e2d/statistics.json?api_key=' + myAPIKey2;

function pullSeasonStatsAPI(){
    $.get(seasonStatsAPI, function(data){
        var libraryArray = [];
        var keys = Object.keys(data);
        console.log(keys);

        keys.forEach(function(aKey){
            var aLibrary = data[aKey];
            libraryArray.push(aLibrary);
            console.log(libraryArray);
         });
    });
}

//standings API 
var standingsAPI = 'http://my-little-cors-proxy.herokuapp.com/http://api.sportradar.us/mlb/trial/v6.5/en/seasons/2018/REG/standings.json?api_key=' + myAPIKey;

function pullStandingsAPI(){
    $.get(standingsAPI, function(data){
        var libraryArray = [];
        var keys = Object.keys(data);
        console.log(keys);

        keys.forEach(function(aKey){
            var aLibrary = data[aKey];
            libraryArray.push(aLibrary);
            console.log(libraryArray);
        });
    });
}

//team profile API
var teamProfileAPI = 'http://my-little-cors-proxy.herokuapp.com/http://api.sportradar.us/mlb/trial/v6.5/en/teams/aa34e0ed-f342-4ec6-b774-c79b47b60e2d/profile.json?api_key=' + myAPIKey2;

function pullTeamProfileAPI(){
    $.get(teamProfileAPI, function(data){
        var libraryArray = [];
        var keys = Object.keys(data);
        // console.log(keys);

        keys.forEach(function(aKey){
            var aLibrary = data[aKey];
            libraryArray.push(aLibrary);
            // console.log(libraryArray);
         });
         return(libraryArray);
    });
}

//game summary API
var gameSummaryAPI = 'http://my-little-cors-proxy.herokuapp.com/http://api.sportradar.us/mlb/trial/v6.5/en/games/b6f922df-46c6-483c-8d3b-4235a6fc4520/summary.json?api_key=' + myAPIKey;

function pullGameSummaryAPI(){
    $.get(gameSummaryAPI, function(data){
        var libraryArray = [];
        var keys = Object.keys(data);
        console.log(keys);

        keys.forEach(function(aKey){
            var aLibrary = data[aKey];
            libraryArray.push(aLibrary);
            console.log(libraryArray);
         });
         return(libraryArray);
    });
}

var leagueLeaders = 'http://my-little-cors-proxy.herokuapp.com/http://api.sportradar.us/mlb/trial/v6.5/en/seasons/2018/REG/leaders/statistics.json?api_key=' + myAPIKey2;

// function pullLeagueStats(){
//     $.get(leagueLeaders, function(data){
//         var libraryArray = [];
//         console.log(data);
//         var values = Object.values(data);
//         var playerStats = values[1];
//     })
// }