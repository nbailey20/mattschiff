'use strict';

var musicPlaying = false;
var track = ''; // track name
var x = ''; // music variable

$(document).ready(function() {
    // if play button clicked, either play or pause
    $("#little_rootie_tootie_play").click(function() {
        if (track != '' && track != 'Little_Rootie_Tootie' ) {
            x.pause();
            x.currentTime = 0;
            $("#"+track+"_time").text("");
            musicPlaying = !musicPlaying;
        } 
        x = document.getElementById("Little_Rootie_Tootie");
        track = 'Little_Rootie_Tootie';
        musicPlaying = !musicPlaying;
        if (musicPlaying) {
            x.play();
            trackTime(x, track);
        } else {
            x.pause();
            track = '';
        }
    });
    // if reset button clicked, jump to beginning of track
    $("#little_rootie_tootie_reset").click(function() {
        var y = document.getElementById("Little_Rootie_Tootie");
        y.currentTime = 0;
    });
    
    
    $("#in_summer_play").click(function() {
        if (track != '' && track != 'In_Summer' ) {
            x.pause();
            x.currentTime = 0;
            $("#"+track+"_time").text("");
            musicPlaying = !musicPlaying;
        } 
        x = document.getElementById("In_Summer");
        track = 'In_Summer';
        musicPlaying = !musicPlaying;
        if (musicPlaying) {
            x.play();
            trackTime(x, track);
        } else {
            x.pause();
            track = '';
        }
    });
    $("#in_summer_reset").click(function() {
        var y = document.getElementById("In_Summer");
        y.currentTime = 0;
    });
    
    
    $("#a_glancing_moment_play").click(function() {
        if (track != '' && track != 'A_Glancing_Moment' ) {
            x.pause();
            x.currentTime = 0;
            $("#"+track+"_time").text("");
            musicPlaying = !musicPlaying;
        } 
        x = document.getElementById("A_Glancing_Moment");
        track = 'A_Glancing_Moment';
        musicPlaying = !musicPlaying;
        if (musicPlaying) {
            x.play();
            trackTime(x, track);
        } else {
            x.pause();
            track = '';
        }
    });
    $("#a_glancing_moment_reset").click(function() {
        var y = document.getElementById("A_Glancing_Moment");
        y.currentTime = 0;
    });
    
    
    $("#i_should_care_play").click(function() {
        if (track != '' && track != 'I_Should_Care' ) {
            x.pause();
            x.currentTime = 0;
            $("#"+track+"_time").text("");
            musicPlaying = !musicPlaying;
        } 
        x = document.getElementById("I_Should_Care");
        track = 'I_Should_Care';
        musicPlaying = !musicPlaying;
        if (musicPlaying) {
            x.play();
            trackTime(x, track);
        } else {
            x.pause();
            track = '';
        }
    });
    $("#i_should_care_reset").click(function() {
        var y = document.getElementById("I_Should_Care");
        y.currentTime = 0;
    });
    
    $("#put_it_to_use_play").click(function() {
        if (track != '' && track != 'Put_It_To_Use' ) {
            x.pause();
            x.currentTime = 0;
            $("#"+track+"_time").text("");
            musicPlaying = !musicPlaying;
        } 
        x = document.getElementById("Put_It_To_Use");
        track = 'Put_It_To_Use';
        musicPlaying = !musicPlaying;
        if (musicPlaying) {
            x.play();
            trackTime(x, track);
        } else {
            x.pause();
            track = '';
        }
    });
    $("#put_it_to_use_reset").click(function() {
        var y = document.getElementById("Put_It_To_Use");
        y.currentTime = 0;
    });
    
    $("#round_midnight_play").click(function() {
        if (track != '' && track != 'Round_Midnight' ) {
            x.pause();
            x.currentTime = 0;
            $("#"+track+"_time").text("");
            musicPlaying = !musicPlaying;
        } 
        x = document.getElementById("Round_Midnight");
        track = 'Round_Midnight';
        musicPlaying = !musicPlaying;
        if (musicPlaying) {
            x.play();
            trackTime(x, track);
        } else {
            x.pause();
            track = '';
        }
    });
    $("#round_midnight_reset").click(function() {
        var y = document.getElementById("Round_Midnight");
        y.currentTime = 0;
    });
    
    $("#simple_pleasure_play").click(function() {
        if (track != '' && track != 'Simple_Pleasure' ) {
            x.pause();
            x.currentTime = 0;
            $("#"+track+"_time").text("");
            musicPlaying = !musicPlaying;
        } 
        x = document.getElementById("Simple_Pleasure");
        track = 'Simple_Pleasure';
        musicPlaying = !musicPlaying;
        if (musicPlaying) {
            x.play();
            trackTime(x, track);
        } else {
            x.pause();
            track = '';
        }
    });
    $("#simple_pleasure_reset").click(function() {
        var y = document.getElementById("Simple_Pleasure");
        y.currentTime = 0;
    });
    
    $("#pocket_wes_play").click(function() {
        if (track != '' && track != 'Pocket_Wes' ) {
            x.pause();
            x.currentTime = 0;
            $("#"+track+"_time").text("");
            musicPlaying = !musicPlaying;
        } 
        x = document.getElementById("Pocket_Wes");
        track = 'Pocket_Wes';
        musicPlaying = !musicPlaying;
        if (musicPlaying) {
            x.play();
            trackTime(x, track);
        } else {
            x.pause();
            track = '';
        }
    });
    $("#pocket_wes_reset").click(function() {
        var y = document.getElementById("Pocket_Wes");
        y.currentTime = 0;
    });
    
    $("#catwalk_play").click(function() {
        if (track != '' && track != 'Catwalk' ) {
            x.pause();
            x.currentTime = 0;
            $("#"+track+"_time").text("");
            musicPlaying = !musicPlaying;
        } 
        x = document.getElementById("Catwalk");
        track = 'Catwalk';
        musicPlaying = !musicPlaying;
        if (musicPlaying) {
            x.play();
            trackTime(x, track);
        } else {
            x.pause();
            track = '';
        }
    });
    $("#catwalk_reset").click(function() {
        var y = document.getElementById("Catwalk");
        y.currentTime = 0;
    });
    
    $("#matts_mode_play").click(function() {
        if (track != '' && track != "Matts_Mode" ) {
            x.pause();
            x.currentTime = 0;
            $("#"+track+"_time").text("");
            musicPlaying = !musicPlaying;
        } 
        x = document.getElementById("Matts_Mode");
        track = "Matts_Mode";
        musicPlaying = !musicPlaying;
        if (musicPlaying) {
            x.play();
            trackTime(x, track);
        } else {
            x.pause();
            track = '';
        }
    });
    $("#matts_mode_reset").click(function() {
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