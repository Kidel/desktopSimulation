$(function() {
    $(".app").draggable({ containment: "#drag-area" });
});
$(function() {
    $(".window").draggable({ containment: "#drag-area" });
});

function openApp(appName) {
    $(".window-"+appName).show();
    //TODO: apply max+1 current z-index, stored in a global var and update the var.
}


