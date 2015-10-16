$(function() {
    $(".app").draggable({ containment: "#drag-area" });
    $(".window").draggable({ containment: "#drag-area", handle: ".window-handle" });
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

function openApp(appName) {
    $(".window-" + appName).show();
    //TODO: apply max+1 current z-index, got from all open windows.
}
function closeApp(appName) {
    $(".window-" + appName).hide();
}


