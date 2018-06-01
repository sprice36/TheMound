
function teamListener(){
    $('[data-target-teams]').on('change', function(data){
        $('[data-team-team]').html($('[data-target-team]').children());
        $('[data-team-player]').html($('[data-target-]').children());
        var teamPicked = $('[data-target-teams] option:selected').text();
        // console.log(teamPicked);
        // getTeamInfo(teamPicked);
        getPlayerInfo(teamPicked);
    })
    
}

function positionListener(){
    $('[data-target-positions]').on('change', function(data){
        var positionPicked = $('[data-target-positions] option:selected').text();
        console.log(positionPicked);
        return(positionPicked);
    })
}

function dateListener(){
    $('[data-target-schedule]').on('change', function(data){
        var datePicked = $('[data-target-schedule] option:selected').text();
        console.log(datePicked);
        return(datePicked);
})
}



