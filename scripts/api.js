//cors proxy
//http://my-little-cors-proxy.herokuapp.com/

//league schedule API
var leagueScheduleAPI = 'http://my-little-cors-proxy.herokuapp.com/http://api.sportradar.us/mlb/trial/v6.5/en/games/2018/REG/schedule.json?api_key=bacyjb6cyn45qk6zdcz6hfeg';

function pullScheduleAPI() {
    $.get(leagueScheduleAPI, function(data){
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

//game boxscore API
var gameBoxscoreAPI = 'http://my-little-cors-proxy.herokuapp.com/http://api.sportradar.us/mlb/trial/v6.5/en/games/b6f922df-46c6-483c-8d3b-4235a6fc4520/boxscore.json?api_key=bacyjb6cyn45qk6zdcz6hfeg';

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
var venuesAPI = 'http://my-little-cors-proxy.herokuapp.com/http://api.sportradar.us/mlb/trial/v6.5/en/league/venues.json?api_key=bacyjb6cyn45qk6zdcz6hfeg';

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
var playerAPI = 'http://my-little-cors-proxy.herokuapp.com/http://api.sportradar.us/mlb/trial/v6.5/en/players/6e1cac5c-b059-4b80-a267-5143b19efb27/profile.json?api_key=bacyjb6cyn45qk6zdcz6hfeg';

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
var seasonStatsAPI = 'http://my-little-cors-proxy.herokuapp.com/http://api.sportradar.us/mlb/trial/v6.5/en/seasons/2018/REG/teams/aa34e0ed-f342-4ec6-b774-c79b47b60e2d/statistics.json?api_key=bacyjb6cyn45qk6zdcz6hfeg';

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
var standingsAPI = 'http://my-little-cors-proxy.herokuapp.com/http://api.sportradar.us/mlb/trial/v6.5/en/seasons/2018/REG/standings.json?api_key=bacyjb6cyn45qk6zdcz6hfeg';

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
var teamProfileAPI = 'http://my-little-cors-proxy.herokuapp.com/http://api.sportradar.us/mlb/trial/v6.5/en/teams/aa34e0ed-f342-4ec6-b774-c79b47b60e2d/profile.json?api_key=bacyjb6cyn45qk6zdcz6hfeg';

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
var gameSummaryAPI = 'http://my-little-cors-proxy.herokuapp.com/http://api.sportradar.us/mlb/trial/v6.5/en/games/b6f922df-46c6-483c-8d3b-4235a6fc4520/summary.json?api_key=bacyjb6cyn45qk6zdcz6hfeg';

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
    });
}