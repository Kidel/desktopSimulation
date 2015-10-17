apps.forEach(function(entry) {
    $("#drag-area").append(entry);
});

$(function() {
    $(".app").draggable({ containment: "#drag-area" });
    $(".window").draggable({ containment: "#drag-area", handle: ".window-handle" });
    $(".window-contents").resizable({ containment: "#drag-area"});
});

//window position init
$(".window").each(function() {
    var max_h = parseInt($("#desktop").css("height"), 10);
    var offset = parseInt($(this).css("height"), 10)+10;
    var top = parseInt(parseInt($("#desktop").css("height"), 10)/2-300);
    var left = parseInt(parseInt($("#desktop").css("width"), 10)/2-400);
    $(".window").each(function() {
        $(this).css("top", top);
        $(this).css("left", left);
        top += 20+Math.floor((Math.random() * 10) + 1);
        left += 20+Math.floor((Math.random() * 10) + 1);

        if(top+offset>max_h){
            left = 140+Math.floor((Math.random() * 10) + 1);
            top = 30+Math.floor((Math.random() * 10) + 1);
        }
    });
});

//app position init
$(".app").each(function() {
    var max_h = parseInt($("#desktop").css("height"), 10);
    var offset = parseInt($(this).css("height"), 10)+20;
    var top = 20
    var left = 20;
    $(".app").each(function() {
        $(this).css("top", top);
        $(this).css("left", left);
        top += 90;

        if(top+offset>max_h){
            left += 85;
            top = 20
        }
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
        //TODO this will open the menu for the app (with 'open' option)
        //TODO disable  taphold if device is desktop
        $(this).on( "taphold", function(event){ var a=$(this).attr("onclick").split("('"); open_app(a[1].split("')")[0]); });
        return true;
    });
    $("#desktop").mousedown(function(e){
        if( e.button == 2 ) {
            alert('Right mouse button on desktop');
            return false;
        }
        $(".app").each(function(){
            $(this).removeClass('app-selected');
        });
        return true;
    });
});

function get_max_z(target_class){
    var max = (target_class=="window")? 100 : 2;
    $("."+target_class).each(function() {
        var index_current = parseInt($(this).css("z-index"), 10);
        if (index_current > max) {
            max = index_current;
        }
    });
    return max;
}

function open_app(app_name) {
    $(".window").each(function(){
        $(this).removeClass('window-selected');
    });
    $(".app").each(function(){
        $(this).removeClass('app-selected');
    });
    $(".window-" + app_name).css("z-index", (get_max_z("window")+1)).addClass('window-selected').show();
}
function close_app(app_name) {
    $(".window-" + app_name).hide();
}
function select_app(app_name) {
    $(".app").each(function(){
        $(this).removeClass('app-selected');
    });
    $(".app-" + app_name).addClass('app-selected').css("z-index", (get_max_z("app")+1));
}




// TODO
// menus and different app contents
