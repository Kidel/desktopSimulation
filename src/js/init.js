var apps=[];
function add_app(params){
    apps.push(''+
        '<div class="window window-'+ params.name +'">'+
        '<div class="window-right-click-menu">'+
        ''+
        '</div><!--window-right-click-menu-->'+
        '<div class="window-frame">'+
        '<div class="window-handle" onmousedown="open_app(\''+ params.name +'\')" onclick="open_app(\''+ params.name +'\')">'+
        '</div>'+
        '<div class="close-button" onclick="close_app(\''+ params.name +'\')">'+
        'x' +
        '</div>'+
        ''+
        '<div class="window-contents" onclick="open_app(\''+ params.name +'\')">'+
        params.contents +
        '</div><!--window-contents-->'+
        '</div><!--window-frame-->'+
        '</div><!--window-'+ params.name +'-->'+
        ''+
        ''+
        '<div class="app app-'+ params.name +'" onmousedown="select_app(\''+ params.name +'\')" onclick="select_app(\''+ params.name +'\')" ondblclick="open_app(\''+ params.name +'\')">'+
        '<div class="app-right-click-menu">'+
        ''+
        '</div><!--app-right-click-menu-->'+
        '<div class="icon">'+
        '<img src="img/'+ params.icon +'" alt=" " />'+
        '</div><!--icon-->'+
        '<div class="app-text">'+
        params.name +
        '</div><!--app-text-->'+
        '</div><!--app-'+ params.name +'-->' +
        '');
}
