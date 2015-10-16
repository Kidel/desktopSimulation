// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

/*

 // doubletap on mobile devices. Use onclick="tap(tapOnceFunc, arg, tapTwiceFunc, arg)"
 var doubletapTimer = null;
 function tap(singleTapFunc, arg1, doubleTapFunc, arg2) {
 if (doubletapTimer==null) {
 // First tap, we wait X ms to the second tap
 doubletapTimer = setTimeout(function(){ singleTapFunc(arg1); doubletapTimer = null; }, 200);
 } else {
 // Second tap
 clearTimeout(doubletapTimer);
 doubletapTimer = null;
 doubleTapFunc(arg2);
 }
 }

* */
