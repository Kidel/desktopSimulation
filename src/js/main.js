$(function() {
    $(".app").draggable({ containment: "#drag-area" });
    $(".window").draggable({ containment: "#drag-area", handle: ".window-handle" });
});

//window position init
$(".window").each(function() {
    var top = parseInt(parseInt($("#desktop").css("height"), 10)/2-300);
    var left = parseInt(parseInt($("#desktop").css("width"), 10)/2-400);
    $(".window").each(function() {
        $(this).css("top", top);
        $(this).css("left", left);
        top += 20;
        left += 20;
    });
});

//app position init
$(".app").each(function() {
    var maxH = parseInt($("#desktop").css("height"), 10);
    var top = 20
    var left = 20;
    $(".app").each(function() {
        $(this).css("top", top);
        $(this).css("left", left);
        top += 85;

        if(top+85>maxH)
            left += 95;
    });
});

$(document).ready(function(){
    document.oncontextmenu = function() {return false;};
    $(".window").mousedown(function(e){
        if( e.button == 2 ) {
            alert('Right mouse button on window');
            return false;
        }
        return true;
    });
    $("#home-menu").mousedown(function(e){
        if( e.button == 2 ) {
            alert('Right mouse button on home menu');
            return false;
        }
        return true;
    });
    $(".app").mousedown(function(e){
        if( e.button == 2 ) {
            alert('Right mouse button on app');
            return false;
        }
        return true;
    });
    $("#desktop").mousedown(function(e){
        if( e.button == 2 ) {
            alert('Right mouse button on desktop');
            return false;
        }
        return true;
    });
});

function get_max_z(){
    var max = 0;
    $(".window").each(function() {
        var index_current = parseInt($(this).css("zIndex"), 10);
        if (index_current > max) {
            max = index_current;
        }
    });
    return max;
    //console.log(max);
}

function openApp(appName) {
    $(".window-" + appName).css("z-index", (get_max_z()+1));
    $(".window-" + appName).show();
}

function closeApp(appName) {
    $(".window-" + appName).hide();
}


// TODO
// color app icon when single clicked, remove color when double clicked or when another app is selected
