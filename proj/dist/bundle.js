(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sayHello(name) {
    var v = 1;
    return "Hello from " + name;
}
exports.sayHello = sayHello;
},{}],2:[function(require,module,exports){
//import * as $ from "jquery";
//var $ = require('jquery');
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="../node_modules/@types/jquery/index.d.ts" />
var greet_1 = require("./greet");
function showHello(divName, name) {
    var elt = document.getElementById(divName);
    elt.innerText = greet_1.sayHello(name);
}
//showHello("greeting", "TypeScript"); 
// function showHi(name: string) {
//     var elt = $("#greeting");
//     elt.innerText = "Hello World JQuery";
// }
// $( document ).ready(function(){
//     var elt = $("#greeting");
//     elt.innerText = "Hello World JQuery";
// })
$(function () {
    var elt = $("#greeting");
    if (elt.length > 0) {
        elt[0].innerText = "Hello World JQuery";
    }
    var v = 1;
});
// var elt = $("#greeting");
// elt.innerText = "Hello World JQuery";
},{"./greet":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZ3JlZXQudHMiLCJzcmMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsa0JBQXlCLElBQVk7SUFDakMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsTUFBTSxDQUFDLGdCQUFjLElBQU0sQ0FBQztBQUNoQyxDQUFDO0FBSEQsNEJBR0M7O0FDRkQsOEJBQThCO0FBQzlCLDRCQUE0Qjs7O0FBRTVCLGlFQUFpRTtBQUVqRSxpQ0FBbUM7QUFFbkMsbUJBQW1CLE9BQWUsRUFBRSxJQUFZO0lBQzVDLElBQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0MsR0FBRyxDQUFDLFNBQVMsR0FBRyxnQkFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ25DLENBQUM7QUFFRCx1Q0FBdUM7QUFFdkMsa0NBQWtDO0FBQ2xDLGdDQUFnQztBQUNoQyw0Q0FBNEM7QUFDNUMsSUFBSTtBQUVKLGtDQUFrQztBQUNsQyxnQ0FBZ0M7QUFDaEMsNENBQTRDO0FBQzVDLEtBQUs7QUFFTCxDQUFDLENBQUM7SUFDRSxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDekIsRUFBRSxDQUFBLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQSxDQUFDO1FBQ2YsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxvQkFBb0IsQ0FBQztJQUM1QyxDQUFDO0lBQ0QsSUFBSSxDQUFDLEdBQUMsQ0FBQyxDQUFDO0FBQ1osQ0FBQyxDQUFDLENBQUE7QUFFRiw0QkFBNEI7QUFDNUIsd0NBQXdDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImV4cG9ydCBmdW5jdGlvbiBzYXlIZWxsbyhuYW1lOiBzdHJpbmcpIHtcclxuICAgIHZhciB2ID0gMTtcclxuICAgIHJldHVybiBgSGVsbG8gZnJvbSAke25hbWV9YDtcclxufSIsIlxyXG4vL2ltcG9ydCAqIGFzICQgZnJvbSBcImpxdWVyeVwiO1xyXG4vL3ZhciAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XHJcblxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vbm9kZV9tb2R1bGVzL0B0eXBlcy9qcXVlcnkvaW5kZXguZC50c1wiIC8+XHJcblxyXG5pbXBvcnQgeyBzYXlIZWxsbyB9IGZyb20gXCIuL2dyZWV0XCI7XHJcblxyXG5mdW5jdGlvbiBzaG93SGVsbG8oZGl2TmFtZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGVsdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRpdk5hbWUpO1xyXG4gICAgZWx0LmlubmVyVGV4dCA9IHNheUhlbGxvKG5hbWUpO1xyXG59XHJcblxyXG4vL3Nob3dIZWxsbyhcImdyZWV0aW5nXCIsIFwiVHlwZVNjcmlwdFwiKTsgXHJcblxyXG4vLyBmdW5jdGlvbiBzaG93SGkobmFtZTogc3RyaW5nKSB7XHJcbi8vICAgICB2YXIgZWx0ID0gJChcIiNncmVldGluZ1wiKTtcclxuLy8gICAgIGVsdC5pbm5lclRleHQgPSBcIkhlbGxvIFdvcmxkIEpRdWVyeVwiO1xyXG4vLyB9XHJcblxyXG4vLyAkKCBkb2N1bWVudCApLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbi8vICAgICB2YXIgZWx0ID0gJChcIiNncmVldGluZ1wiKTtcclxuLy8gICAgIGVsdC5pbm5lclRleHQgPSBcIkhlbGxvIFdvcmxkIEpRdWVyeVwiO1xyXG4vLyB9KVxyXG5cclxuJChmdW5jdGlvbigpe1xyXG4gICAgdmFyIGVsdCA9ICQoXCIjZ3JlZXRpbmdcIik7XHJcbiAgICBpZihlbHQubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgZWx0WzBdLmlubmVyVGV4dCA9IFwiSGVsbG8gV29ybGQgSlF1ZXJ5XCI7XHJcbiAgICB9XHJcbiAgICB2YXIgdj0xO1xyXG59KVxyXG5cclxuLy8gdmFyIGVsdCA9ICQoXCIjZ3JlZXRpbmdcIik7XHJcbi8vIGVsdC5pbm5lclRleHQgPSBcIkhlbGxvIFdvcmxkIEpRdWVyeVwiO1xyXG4iXX0=
