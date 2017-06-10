'use strict';

var musicPlaying = false;
var track = ''; // track name
var x = ''; // music variable

$(document).ready(function() {
    // if play button clicked, either play or pause
    $("#Little_Rootie_Tootie_play").click(function() {
        if (track != '' && track != 'Little_Rootie_Tootie' ) {
            x.pause();
            $("#"+track+"_play").html('<i class="fa fa-play" aria-hidden="true"></i>');
            x.currentTime = 0;
            $("#"+track+"_time").text("");
            musicPlaying = !musicPlaying;
        } 
        x = document.getElementById("Little_Rootie_Tootie");
        track = 'Little_Rootie_Tootie';
        musicPlaying = !musicPlaying;
        if (musicPlaying) {
            x.play();
            $("#Little_Rootie_Tootie_play").html('<i class="fa fa-pause" aria-hidden="true"></i>');
            trackTime(x, track);
        } else {
            x.pause();
            $("#Little_Rootie_Tootie_play").html('<i class="fa fa-play" aria-hidden="true"></i>');
            track = '';
        }
    });
    // if reset button clicked, jump to beginning of track
    $("#Little_Rootie_Tootie_reset").click(function() {
        var y = document.getElementById("Little_Rootie_Tootie");
        y.currentTime = 0;
    });
    
    
    $("#In_Summer_play").click(function() {
        if (track != '' && track != 'In_Summer' ) {
            x.pause();
            $("#"+track+"_play").html('<i class="fa fa-play" aria-hidden="true"></i>');
            x.currentTime = 0;
            $("#"+track+"_time").text("");
            musicPlaying = !musicPlaying;
        } 
        x = document.getElementById("In_Summer");
        track = 'In_Summer';
        musicPlaying = !musicPlaying;
        if (musicPlaying) {
            x.play();
            $("#In_Summer_play").html('<i class="fa fa-pause" aria-hidden="true"></i>');
            trackTime(x, track);
        } else {
            x.pause();
            $("#In_Summer_play").html('<i class="fa fa-play" aria-hidden="true"></i>');
            track = '';
        }
    });
    $("#In_Summer_reset").click(function() {
        var y = document.getElementById("In_Summer");
        y.currentTime = 0;
    });
    
    
    $("#A_Glancing_Moment_play").click(function() {
        if (track != '' && track != 'A_Glancing_Moment' ) {
            x.pause();
            $("#"+track+"_play").html('<i class="fa fa-play" aria-hidden="true"></i>');
            x.currentTime = 0;
            $("#"+track+"_time").text("");
            musicPlaying = !musicPlaying;
        } 
        x = document.getElementById("A_Glancing_Moment");
        track = 'A_Glancing_Moment';
        musicPlaying = !musicPlaying;
        if (musicPlaying) {
            x.play();
            $("#A_Glancing_Moment_play").html('<i class="fa fa-pause" aria-hidden="true"></i>');
            trackTime(x, track);
        } else {
            x.pause();
            $("#A_Glancing_Moment_play").html('<i class="fa fa-play" aria-hidden="true"></i>');
            track = '';
        }
    });
    $("#A_Glancing_Moment_reset").click(function() {
        var y = document.getElementById("A_Glancing_Moment");
        y.currentTime = 0;
    });
    
    
    $("#I_Should_Care_play").click(function() {
        if (track != '' && track != 'I_Should_Care' ) {
            x.pause();
            $("#"+track+"_play").html('<i class="fa fa-play" aria-hidden="true"></i>');
            x.currentTime = 0;
            $("#"+track+"_time").text("");
            musicPlaying = !musicPlaying;
        } 
        x = document.getElementById("I_Should_Care");
        track = 'I_Should_Care';
        musicPlaying = !musicPlaying;
        if (musicPlaying) {
            x.play();
            $("#I_Should_Care_play").html('<i class="fa fa-pause" aria-hidden="true"></i>');
            trackTime(x, track);
        } else {
            x.pause();
            $("#I_Should_Care_play").html('<i class="fa fa-play" aria-hidden="true"></i>');
            track = '';
        }
    });
    $("#I_Should_Care_reset").click(function() {
        var y = document.getElementById("I_Should_Care");
        y.currentTime = 0;
    });
    
    $("#Put_It_To_Use_play").click(function() {
        if (track != '' && track != 'Put_It_To_Use' ) {
            x.pause();
            $("#"+track+"_play").html('<i class="fa fa-play" aria-hidden="true"></i>');
            x.currentTime = 0;
            $("#"+track+"_time").text("");
            musicPlaying = !musicPlaying;
        } 
        x = document.getElementById("Put_It_To_Use");
        track = 'Put_It_To_Use';
        musicPlaying = !musicPlaying;
        if (musicPlaying) {
            x.play();
            $("#Put_It_To_Use_play").html('<i class="fa fa-pause" aria-hidden="true"></i>');
            trackTime(x, track);
        } else {
            x.pause();
            $("#Put_It_To_Use_play").html('<i class="fa fa-play" aria-hidden="true"></i>');
            track = '';
        }
    });
    $("#Put_It_To_Use_reset").click(function() {
        var y = document.getElementById("Put_It_To_Use");
        y.currentTime = 0;
    });
    
    $("#Round_Midnight_play").click(function() {
        if (track != '' && track != 'Round_Midnight' ) {
            x.pause();
            $("#"+track+"_play").html('<i class="fa fa-play" aria-hidden="true"></i>');
            x.currentTime = 0;
            $("#"+track+"_time").text("");
            musicPlaying = !musicPlaying;
        } 
        x = document.getElementById("Round_Midnight");
        track = 'Round_Midnight';
        musicPlaying = !musicPlaying;
        if (musicPlaying) {
            x.play();
            $("#Round_Midnight_play").html('<i class="fa fa-pause" aria-hidden="true"></i>');
            trackTime(x, track);
        } else {
            x.pause();
            $("#Round_Midnight_play").html('<i class="fa fa-play" aria-hidden="true"></i>');
            track = '';
        }
    });
    $("#Round_Midnight_reset").click(function() {
        var y = document.getElementById("Round_Midnight");
        y.currentTime = 0;
    });
    
    $("#Simple_Pleasure_play").click(function() {
        if (track != '' && track != 'Simple_Pleasure' ) {
            x.pause();
            $("#"+track+"_play").html('<i class="fa fa-play" aria-hidden="true"></i>');
            x.currentTime = 0;
            $("#"+track+"_time").text("");
            musicPlaying = !musicPlaying;
        } 
        x = document.getElementById("Simple_Pleasure");
        track = 'Simple_Pleasure';
        musicPlaying = !musicPlaying;
        if (musicPlaying) {
            x.play();
            $("#Simple_Pleasure_play").html('<i class="fa fa-pause" aria-hidden="true"></i>');
            trackTime(x, track);
        } else {
            x.pause();
            $("#Simple_Pleasure_play").html('<i class="fa fa-play" aria-hidden="true"></i>');
            track = '';
        }
    });
    $("#Simple_Pleasure_reset").click(function() {
        var y = document.getElementById("Simple_Pleasure");
        y.currentTime = 0;
    });
    
    $("#Pocket_Wes_play").click(function() {
        if (track != '' && track != 'Pocket_Wes' ) {
            x.pause();
            $("#"+track+"_play").html('<i class="fa fa-play" aria-hidden="true"></i>');
            x.currentTime = 0;
            $("#"+track+"_time").text("");
            musicPlaying = !musicPlaying;
        } 
        x = document.getElementById("Pocket_Wes");
        track = 'Pocket_Wes';
        musicPlaying = !musicPlaying;
        if (musicPlaying) {
            x.play();
            $("#Pocket_Wes_play").html('<i class="fa fa-pause" aria-hidden="true"></i>');
            trackTime(x, track);
        } else {
            x.pause();
            $("#Pocket_Wes_play").html('<i class="fa fa-play" aria-hidden="true"></i>');
            track = '';
        }
    });
    $("#Pocket_Wes_reset").click(function() {
        var y = document.getElementById("Pocket_Wes");
        y.currentTime = 0;
    });
    
    $("#Catwalk_play").click(function() {
        if (track != '' && track != 'Catwalk' ) {
            x.pause();
            $("#"+track+"_play").html('<i class="fa fa-play" aria-hidden="true"></i>');
            x.currentTime = 0;
            $("#"+track+"_time").text("");
            musicPlaying = !musicPlaying;
        } 
        x = document.getElementById("Catwalk");
        track = 'Catwalk';
        musicPlaying = !musicPlaying;
        if (musicPlaying) {
            x.play();
            $("#Catwalk_play").html('<i class="fa fa-pause" aria-hidden="true"></i>');
            trackTime(x, track);
        } else {
            x.pause();
            $("#Catwalk_play").html('<i class="fa fa-play" aria-hidden="true"></i>');
            track = '';
        }
    });
    $("#Catwalk_reset").click(function() {
        var y = document.getElementById("Catwalk");
        y.currentTime = 0;
    });
    
    $("#Matts_Mode_play").click(function() {
        if (track != '' && track != "Matts_Mode" ) {
            x.pause();
            $("#"+track+"_play").html('<i class="fa fa-play" aria-hidden="true"></i>');
            x.currentTime = 0;
            $("#"+track+"_time").text("");
            musicPlaying = !musicPlaying;
        } 
        x = document.getElementById("Matts_Mode");
        track = "Matts_Mode";
        musicPlaying = !musicPlaying;
        if (musicPlaying) {
            x.play();
            $("#Matts_Mode_play").html('<i class="fa fa-pause" aria-hidden="true"></i>');
            trackTime(x, track);
        } else {
            x.pause();
            $("#Matts_Mode_play").html('<i class="fa fa-play" aria-hidden="true"></i>');
            track = '';
        }
    });
    $("#Matts_Mode_reset").click(function() {
        var y = document.getElementById("Matts_Mode");
        y.currentTime = 0;
    });
   
});

function trackTime(music, id) {
    console.log(musicPlaying);
    if (musicPlaying && id == track) {
        var currTime = music.currentTime;
         console.log(currTime);
        currTime = Math.floor(currTime);
        if (currTime > 59) {
            var mins = Math.floor(currTime / 60);
            var secs = currTime % 60;
            if (secs < 10) {
                currTime = mins.toString() + ":0" + secs.toString();
            }
            else {
               currTime = mins.toString() + ":" + secs.toString(); 
            }
        }
        else {
            if (currTime > 9) {
                currTime = "0:" + currTime.toString();
            }
            else {
                currTime = "0:0" + currTime.toString();
            }
        }
        $('#' + id + "_time").text(currTime);
        setTimeout(function() {
            trackTime(music, id);
        }, 1000);
    }
    else {
        $('#' + id + "_time").text('');
    }
}