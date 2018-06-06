// var hierarchy = 'http://my-little-cors-proxy.herokuapp.com/http://api.sportradar.us/mlb/trial/v6.5/en/league/hierarchy.json?api_key=' + myAPIKey;

// function getTeamNames(data) {
//     // $.get(hierarchy, function(data) {
//         teamNames = 
//         // teamIDS = [];
//         var vals = Object.values(data);
//         var next = Object.values(vals);
//         var blue = next[1];
//         blue.forEach(function(stuff) {
//             var green = Object.values(stuff);
//             var green3 = green[3];
//             var again = Object.keys(green3);
//             // console.log(green3.)
//             again.forEach(function(hey) {
//                 var newVar = green3[hey];
//                 var newNew = Object.values(newVar);
//                 var newNew3 = newNew[3];
//                 var newVal = Object.keys(newNew3);
//                 newVal.forEach(function(here) {
//                     var hmmm = newNew3[here];
//                     // console.log(hmmm);
//                     teamNames.push(hmmm.name);
//                     // teamIDS.push(hmmm.id)
//                     // return teamIDS;
//                     // return teamNames;
//                 })
//             })
//         })
//         return(teamNames);
//     //   return(teamIDS);
// }
    
// function getTeamIDS(data) {
//     // $.get(hierarchy, function(data) {
//         // teamNames = [];
//         teamIDS = [];
//         var vals = Object.values(data);
//         var next = Object.values(vals);
//         var blue = next[1];
//         blue.forEach(function(stuff) {
//             var green = Object.values(stuff);
//             var green3 = green[3];
//             var again = Object.keys(green3);
//             // console.log(green3.)
//             again.forEach(function(hey) {
//                 var newVar = green3[hey];
//                 var newNew = Object.values(newVar);
//                 var newNew3 = newNew[3];
//                 var newVal = Object.keys(newNew3);
//                 newVal.forEach(function(here) {
//                     var hmmm = newNew3[here];
//                     // console.log(hmmm);
//                     // teamNames.push(hmmm.name);
//                     teamIDS.push(hmmm.id)
//                     // return teamIDS;
//                     // return teamNames;
//                 })
//             })
//         })
//     //    return(teamNames);
//        return(teamIDS);
// }
    

// function popTeamNames() {
//     var refObject = localStorage.getItem('teamProfile');
//     refObject = JSON.parse(refObject);
//     refObject.forEach(function(data){
//         var teamName = data['name']
//         var newSelector = $(`<option value=${teamName}>${teamName}</option>`);
//         $('[data-target-teams]').append(newSelector);

//     })
// }

// function getAndPopPlayerPositions() {
//     var position = localStorage.getItem('teamProfile');
//     position = JSON.parse(position);
//     position.forEach(function(data){
//         var player = data['players'];
//         player.forEach(function(val){
//             var positionName = val['primary_position'];
//             var newSelector = $(`<option value=${positionName}>${positionName}</option>`);
//             $('[data-target-positions]').append(newSelector);
//         })
//         })
// }
    

function pullSchedule(data){
    var cleanDate = [];
    var key = Object.values(data);
    var gameSchedule = key[2];
    var gameDays = Object.values(gameSchedule);
    var days = [];
    gameDays.forEach(function(steps){
        days.push(steps.scheduled.slice(0, 10));
    })
    var daysFixed = [...new Set(days)]
    var daysSorted = daysFixed.sort(function(a, b){
        if (a < b){
            return -1
        } else if (b < a) {
            return 1
        } else {
            return 0
        }   
    });
    daysSorted.forEach(function(date){
        cleanDate.push(moment(date).format('MMM Do YY'));
        // console.log(cleanDate);
        return(cleanDate);
    })
    return(cleanDate)
}

function popNavDate(cleanDate){
    // console.log(cleanDate);
    cleanDate.forEach(function(print){
        var newSelector = $(`<option value=${print}>${print}</option>`);
            $('[data-target-schedule]').append(newSelector);
    })
}
function dateListener(){
    $('[data-target-schedule]').on('change', function(data){
        var datePicked = $('[data-target-schedule] option:selected').text();
        var dateParts = datePicked.split(" ");
        var year = 2018; 


        var daySplit = dateParts[1].split("");

        if (daySplit.length > 3){
            var day = daySplit[0] + daySplit[1];
        }else{
            var day = '0' + daySplit[0];
        }

        var month = '';
        if (dateParts[0] == 'Mar'){
           month = '03'  
        } 
        else if (dateParts[0] == 'Apr'){
            month = '04'
        }
        else if (dateParts[0] == 'May'){
            month = '05'
        }
        else if (dateParts[0] == 'Jun'){
           month = '06'
        }
        else if (dateParts[0] == 'Jul'){
           month = '07'
        }
        else if (dateParts[0] == 'Aug'){
            month = '08'
        }
        else if (dateParts[0] == 'Sep'){
           month = '09'
        }
        else if (dateParts[0] == 'Oct'){
           month = '10'
        } 
         var formatDate = ""+ year +'/'+ month+ '/'+ day;
       console.log(formatDate);
       getGameIDs(formatDate);
       return(formatDate);
        })
}
function getGameIDs(date){
     
    var saveDate =  localStorage.setItem('date', date);
    console.log(saveDate);
 
     $.get('http://my-little-cors-proxy.herokuapp.com/http://api.sportradar.us/mlb/trial/v6.5/en/games/' +date + '/schedule.json?api_key=q6hs5yjn3f87a4ucsxzxuc6m'
     , function(data){
         var libraryArray = [];
         var keys = Object.keys(data);
        // console.log(keys);
         var locationObject = {};
         var gameIDArray = [];
         var gameID;
        keys.forEach(function(aKey){
            var aLibrary = data[aKey];
            libraryArray.push(aLibrary);
            //  console.log(libraryArray);
              
             libraryArray.forEach(function (data){
                 var itemsArray = [];
                 var items = Object.values(data);
              //     console.log(items);
             
                  items.forEach(function (data){
                 var scheduleData = Object.values(data);
                      gameID = scheduleData[0];
                 
                 if (gameID != null && gameID.length > 2){
                      itemsArray.push(gameID);
                      /*
                       gameIDs = itemsArray.sort(function(a,b){
                         if (a < b){
                             return -1
                         } else if (b < a) {
                             return 1
                         } else {
                             return 0
                         }  
                     }); 
                     var distinctGameID = $.each(itemsArray, function (i, arr){
                         if ($.inArray(arr, gameIDArray) === -1) gameIDArray.push(arr);
                         else gameIDArray.pop(arr);
                     });
                     for (var i = 0 ; i < distinctGameID.length/ 2; i++){
                     
                     }
                   //  console.log(distinctGameID);*/
                     console.log(gameID);
                     getGame(gameID);
                     return date;
                  }
             });
         });
     });
 });
 }
 function getGame(gameID) {
     $('[data-target-matchup]').removeClass('hidden')
    $.get(leagueScheduleAPI, function(data){
        var libraryArray = [];
        var keys = Object.keys(data);
        var $venueField = '';
      //  console.log(keys);
        var games
       keys.forEach(function(aKey){
           var aLibrary = data[aKey];
           libraryArray.push(aLibrary);
        //   console.log(libraryArray);

           libraryArray.forEach(function (data){
            var itemsArray = [];
            var items = Object.values(data);
             //console.log(items);

             items.forEach(function (data){
                var gamesData = Object.values(data);
                var gameinfo = gamesData[0];
                  //    console.log(gameinfo);
                
                 if (gameinfo == gameID){

                  var awayTeam = data['away_team'];
                  var homeTeam = data['home_team'];
                  
                  var awayTeamName = '';
                  awayTeamName = getTeamName(awayTeam);
                  var homeTeamName = '';
                  homeTeamName = getTeamName(homeTeam);  
                  
                   
                  if (homeTeamName != null || homeTeamName != undefined){
                    var homeURL = getImage(homeTeamName);
                    var homeTeamImage=  createHomeThumbnail(homeURL);
                  }
                  if (awayTeamName != null || awayTeamName != undefined){
                    var awayURL = getImage(awayTeamName);
                    var awayTeamImage=  createAwayThumbnail(awayURL);
                  }
                   $('[data-home-team]').append(homeTeamImage);
                   $('[data-away-team]').append(awayTeamImage);
                 //   console.log("should have thumbnail appended");
                } 
        
             });
           });
             
        });
        getLocation(gameID);
    });
}
function getLocation(gameID){

    var saveDate =  localStorage.getItem('date');
    console.log(saveDate);

    $.get('http://my-little-cors-proxy.herokuapp.com/http://api.sportradar.us/mlb/trial/v6.5/en/games/' + saveDate + '/schedule.json?api_key=q6hs5yjn3f87a4ucsxzxuc6m'
    , function(data){
        var libraryArray = [];
        var keys = Object.keys(data);
       // console.log(keys);
        var locationObject = {};
        var locationArray = [];
        var gameIdentification = [];
       keys.forEach(function(aKey){
           var aLibrary = data[aKey];
           libraryArray.push(aLibrary);
            // console.log(libraryArray);
             
            libraryArray.forEach(function (data){
                var itemsArray = [];
                var items = Object.values(data);
              //    console.log(items);
            
                 items.forEach(function (data){
                var scheduleData = Object.values(data);
                //  console.log(scheduleData);
                  gameIdentification.push(scheduleData[0]);
                //console.log("gameIdentification no" + gameIdentification);
        
                  //  console.log("gameIdentification no" + gameIdentification);
                if (gameIdentification != gameID){
                     gameIdentification.pop();
                    // console.log("gameIdentification no" + gameIdentification);
                }
                else  {
                scheduleData.forEach(function(data) {
                    var gameData = Object.values(data);
                   // console.log(gameData); 
                   
                       var location = gameData[12];
                 
                       if (location != null && location['lat'] > 0 ){   
                            var latString = location.lat;
                            var latNumber = parseFloat(latString);
                            var lngString = location.lng;
                            var lngNumber = parseFloat(lngString);
                            var locationObject = {lat: latNumber , lng: lngNumber};                        
                            locationArray.push(locationObject);
                        
                        }
                      });
                    }
                 
                 });  
                
             }); 
           
         });
        console.log(locationArray);

        var mapImage = initMap(locationArray[0]);
        $('[data-location]').append(mapImage);
        return locationArray;
     });   
}
function initMap(gameLocation) {
    // The location of the games*/
    // The map, centered at the location
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 18, center: gameLocation, mapTypeId: google.maps.MapTypeId.SATELLITE});
    // The marker, positioned at the game location
    var marker = new google.maps.Marker({position: gameLocation, map: map});
     
}
function createHomeThumbnail(url){
    // console.log(url);
    //console.log("creating thumbnail");
     var $thumbnailImage = $('<img>');
     $thumbnailImage.attr('src', url);
 
     var $thumbnailLink = $('<a>', {
     'href': url});
     
    $thumbnailLink.append($thumbnailImage);
 
     var $thumbnailItem = $('<div>', {
         'class': 'home-team'
     });
     
     $thumbnailItem.append($thumbnailLink);
     //$matchup_container.append($thumbnailItem);
     return $thumbnailItem;
 }
 
 
 function createAwayThumbnail(url){
    // console.log(url);
   // console.log("creating thumbnail");
     var $thumbnailImage = $('<img>');
     $thumbnailImage.attr('src', url);
 
     var $thumbnailLink = $('<a>', {
     'href': url});
     
    $thumbnailLink.append($thumbnailImage);
 
     var $thumbnailItem = $('<div>', {
         'class': 'away-team'
     });
     
     $thumbnailItem.append($thumbnailLink);
     //$matchup_container.append($thumbnailItem);
     return $thumbnailItem;
 }
 

// function startTheProgram(URL){ 
//     var ajaxRequest = $.get(URL);
    
//     ajaxRequest
//     .then(getTeamNames)
//     .then(popTeamNames)
// }


// function nextStep(URL){
//     var ajaxRequest = $.get(URL);

//     ajaxRequest
//     .then(getTeamIDS)
//     .then(getAndPopPlayerPositions)
//     // .then(popPlayerPositions)
// }
// function gameSchedule(URL){
    // var ajaxRequest = $.get(URL)

    // ajaxRequest
    // .then(pullSchedule)
    // .then(popNavDate)
// }

// startTheProgram(hierarchy);
// nextStep(hierarchy);
// gameSchedule(leagueScheduleAPI);
dateListener();