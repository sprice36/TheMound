
function getTeamID(teamName){
  $.get(standingsAPI, function(data){
    var libraryArray = [];
    var keys = Object.keys(data);
   // console.log(keys);

    keys.forEach(function(aKey){
        var aLibrary = data[aKey];
        libraryArray.push(aLibrary);
       // console.log(libraryArray);
    
    libraryArray.forEach(function (data){
        var itemsArray = [];
        var items = Object.values(data['season']);
        // console.log(items);
    
         items[3].forEach(function (data){
        var leaguesData = Object.values(data);
       // console.log(leaguesData);

        leaguesData[3].forEach(function(data) {
            var divisionData = Object.values(data);
           // console.log(divisionData);

        divisionData[3].forEach(function(data) {
            var teamData = Object.values(data);
           // console.log(teamData);
            if (teamName == data.name){
                var ID = data.id;
               // console.log(data.name);
               // console.log(data.id);
                console.log(ID);
            }
           })
         })
       });
     }); 
   });
});

}

//getTeamID('Mets');


function getTeamName(idNumber){
    $.get(standingsAPI, function(data){
    var libraryArray = [];
    var keys = Object.keys(data);
   // console.log(keys);

    keys.forEach(function(aKey){
        var aLibrary = data[aKey];
        libraryArray.push(aLibrary);
       // console.log(libraryArray);
    
    libraryArray.forEach(function (data){
        var itemsArray = [];
        var items = Object.values(data['season']);
        // console.log(items);
    
         items[3].forEach(function (data){
        var leaguesData = Object.values(data);
       // console.log(leaguesData);

        leaguesData[3].forEach(function(data) {
            var divisionData = Object.values(data);
           // console.log(divisionData);

        divisionData[3].forEach(function(data) {
            var teamData = Object.values(data);
           // console.log(teamData);
            if (idNumber == data.id){
                var name = data.name;
               // console.log(data.name);
               // console.log(data.id);
                console.log(name);
            }
           })
         })
       });
     }); 
   });
});
}

//getTeamName('f246a5e5-afdb-479c-9aaa-c68beeda7af6');


function getTeamInfo(teamName){
  
var teamIDKey = getTeamID(teamName);
//teamIDKey = JSON.stringify(teamIDKey);
console.log(teamIDKey);
var teamInfoURL = 'http://my-little-cors-proxy.herokuapp.com/http://api.sportradar.us/mlb/trial/v6.5/en/teams/'; 
var APIkey =  '/profile.json?api_key=bacyjb6cyn45qk6zdcz6hfeg';

var URL = teamInfoURL.concat(teamIDKey,APIkey);
//console.log(URL);
/*
$.get(URL, function (data){
    var libraryArray = [];
    var keys = Object.keys(data);
    console.log(keys);

    keys.forEach(function(aKey){
        var aLibrary = data[aKey];
        libraryArray.push(aLibrary);
        console.log(libraryArray);
     });
    }); */
}

function getPlayerInfo(teamName){



}
