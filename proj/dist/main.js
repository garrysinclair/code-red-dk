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
