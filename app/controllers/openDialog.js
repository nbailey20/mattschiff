$(document).ready(function() {
    $("#dialog-1").dialog({
        autoOpen: false,
        modal: true,
        closeText: "hide",
        width: 1000,
        dialogClass: "no-close",
    });

    $("#dialog-2").dialog({
        autoOpen: false,
        modal: true,
        closeText: "hide",
        width: 1000,
        dialogClass: "no-close",
    });

    $("#dialog-3").dialog({
        autoOpen: false,
        modal: true,
        closeText: "hide",
        width: 1000,
        dialogClass: "no-close",
    });

    $("#dialog-4").dialog({
        autoOpen: false,
        modal: true,
        closeText: "hide",
        width: 1000,
        dialogClass: "no-close",
    });


    // CLOSER FUNCTION
    $('body').on('click', function() {
        var isOpen1 = $("#dialog-1").dialog("isOpen");
        if (isOpen1) {
            $("#dialog-1").dialog('close');
        }
        var isOpen2 = $("#dialog-2").dialog("isOpen");
        if (isOpen2) {
            $("#dialog-2").dialog('close');
        }
        var isOpen3 = $("#dialog-3").dialog("isOpen");
        if (isOpen3) {
            $("#dialog-3").dialog('close');
        }
        var isOpen4 = $("#dialog-4").dialog("isOpen");
        if (isOpen4) {
            $("#dialog-4").dialog('close');
        }
    });


    // START OPENERS
    $("#opener1").click(function(event) {
        setTimeout(function() {
            $("#dialog-1").dialog('open');
        }, 100);
    });

    $("#opener2").click(function(event) {
        setTimeout(function() {
            $("#dialog-2").dialog('open');
        }, 100);
    });

    $("#opener3").click(function(event) {
        setTimeout(function() {
            $("#dialog-3").dialog('open');
        }, 100);
    });

    $("#opener4").click(function(event) {
        setTimeout(function() {
            $("#dialog-4").dialog('open');
        }, 100);
    });


});
