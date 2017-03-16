(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/// <reference path="../../node_modules/@types/jquery/index.d.ts" />
var CodeRed;
(function (CodeRed) {
    var Common;
    (function (Common) {
        Common.domainName = "code-red.dk";
    })(Common = CodeRed.Common || (CodeRed.Common = {}));
})(CodeRed || (CodeRed = {}));
$(document).ready(function () {
    $(".dynamicstuff").html("Hello World from " + CodeRed.Common.domainName);
});
},{}],2:[function(require,module,exports){
var CodeRed;
(function (CodeRed) {
    var Data;
    (function (Data) {
        Data.serviceName = "getData";
    })(Data = CodeRed.Data || (CodeRed.Data = {}));
})(CodeRed || (CodeRed = {}));
},{}]},{},[1,2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDb21tb24vVmFyaWFibGVzLnRzIiwiRGF0YS9EYXRhU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLG9FQUFvRTtBQUVwRSxJQUFPLE9BQU8sQ0FFYjtBQUZELFdBQU8sT0FBTztJQUFDLElBQUEsTUFBTSxDQUVwQjtJQUZjLFdBQUEsTUFBTTtRQUNOLGlCQUFVLEdBQUcsYUFBYSxDQUFDO0lBQzFDLENBQUMsRUFGYyxNQUFNLEdBQU4sY0FBTSxLQUFOLGNBQU0sUUFFcEI7QUFBRCxDQUFDLEVBRk0sT0FBTyxLQUFQLE9BQU8sUUFFYjtBQUVELENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDZixDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDNUUsQ0FBQyxDQUFDLENBQUM7O0FDUEgsSUFBTyxPQUFPLENBR2I7QUFIRCxXQUFPLE9BQU87SUFBQyxJQUFBLElBQUksQ0FHbEI7SUFIYyxXQUFBLElBQUk7UUFDSixnQkFBVyxHQUFHLFNBQVMsQ0FBQztJQUV2QyxDQUFDLEVBSGMsSUFBSSxHQUFKLFlBQUksS0FBSixZQUFJLFFBR2xCO0FBQUQsQ0FBQyxFQUhNLE9BQU8sS0FBUCxPQUFPLFFBR2IiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL25vZGVfbW9kdWxlcy9AdHlwZXMvanF1ZXJ5L2luZGV4LmQudHNcIiAvPlxyXG5cclxubW9kdWxlIENvZGVSZWQuQ29tbW9uIHtcclxuICAgIGV4cG9ydCB2YXIgZG9tYWluTmFtZSA9IFwiY29kZS1yZWQuZGtcIjtcclxufVxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAkKFwiLmR5bmFtaWNzdHVmZlwiKS5odG1sKFwiSGVsbG8gV29ybGQgZnJvbSBcIiArIENvZGVSZWQuQ29tbW9uLmRvbWFpbk5hbWUpO1xyXG59KTsgIiwiXHJcbm1vZHVsZSBDb2RlUmVkLkRhdGEge1xyXG4gICAgZXhwb3J0IHZhciBzZXJ2aWNlTmFtZSA9IFwiZ2V0RGF0YVwiO1xyXG4gICBcclxufVxyXG4iXX0=
