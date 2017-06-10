$(document).ready(function() {
    // DECLARE DIALOG BOXES
    $("#MS_BF_front").dialog({
        autoOpen: false,
        modal: true,
        closeText: "hide",
        width: 1000,
        dialogClass: "no-close",
    });
    $("#MS_BF_back").dialog({
        autoOpen: false,
        modal: true,
        closeText: "hide",
        width: 1000,
        dialogClass: "no-close",
    });
    $("#Alone_front").dialog({
        autoOpen: false,
        modal: true,
        closeText: "hide",
        width: 1000,
        dialogClass: "no-close",
    });
    $("#Alone_back").dialog({
        autoOpen: false,
        modal: true,
        closeText: "hide",
        width: 1000,
        dialogClass: "no-close",
    });
     $("#Sisters_front").dialog({
        autoOpen: false,
        modal: true,
        closeText: "hide",
        width: 1000,
        dialogClass: "no-close",
    });
     $("#Sisters_back").dialog({
        autoOpen: false,
        modal: true,
        closeText: "hide",
        width: 1000,
        dialogClass: "no-close",
    });
    
    
    
    // CLOSER FUNCTION
    $('body').on('click', function() {
        var isOpen1 = $("#MS_BF_front").dialog("isOpen");
        if (isOpen1) {
            $("#MS_BF_front").dialog('close');
        }
        var isOpen2 = $("#MS_BF_back").dialog("isOpen");
        if (isOpen2) {
            $("#MS_BF_back").dialog('close');
        }
        var isOpen3 = $("#Alone_front").dialog("isOpen");
        if (isOpen3) {
            $("#Alone_front").dialog('close');
        }
        var isOpen4 = $("#Alone_back").dialog("isOpen");
        if (isOpen4) {
            $("#Alone_back").dialog('close');
        }
        var isOpen5 = $("#Sisters_front").dialog("isOpen");
        if (isOpen5) {
            $("#Sisters_front").dialog('close');
        }
        var isOpen6 = $("#Sisters_back").dialog("isOpen");
        if (isOpen6) {
            $("#Sisters_back").dialog('close');
        }
    });
    
    
    // START OPENERS
    $("#MS_BF_front_open").click(function(event) {
        setTimeout(function() {
            $("#MS_BF_front").dialog('open');
        }, 100);
    });
    $("#MS_BF_back_open").click(function(event) {
        setTimeout(function() {
            $("#MS_BF_back").dialog('open');
        }, 100);
    });
    $("#Alone_front_open").click(function(event) {
        setTimeout(function() {
            $("#Alone_front").dialog('open');
        }, 100);
    });
    $("#Alone_back_open").click(function(event) {
        setTimeout(function() {
            $("#Alone_back").dialog('open');
        }, 100);
    });
     $("#Sisters_front_open").click(function(event) {
        setTimeout(function() {
            $("#Sisters_front").dialog('open');
        }, 100);
    });
     $("#Sisters_back_open").click(function(event) {
        setTimeout(function() {
            $("#Sisters_back").dialog('open');
        }, 100);
    });
    
});