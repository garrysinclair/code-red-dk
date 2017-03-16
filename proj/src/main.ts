
//import * as $ from "jquery";
//var $ = require('jquery');

/// <reference path="../node_modules/@types/jquery/index.d.ts" />

import { sayHello } from "./greet";

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = sayHello(name);
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

$(function(){
    var elt = $("#greeting");
    if(elt.length > 0){
        elt[0].innerText = "Hello World JQuery";
    }
    var v=1;
})

// var elt = $("#greeting");
// elt.innerText = "Hello World JQuery";
