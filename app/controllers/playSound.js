$(document).ready(function() {
   var x = document.getElementById("myAudio"); 

    $("#play").click(function() {
        x.play();
    });
    
     $("#pause").click(function() {
        x.pause();
    });
 
});