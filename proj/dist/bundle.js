/// <reference path="../../node_modules/@types/jquery/index.d.ts" />
var CodeRed;
(function (CodeRed) {
    var Common;
    (function (Common) {
        Common.domainName = "code-red.dk";
    })(Common = CodeRed.Common || (CodeRed.Common = {}));
})(CodeRed || (CodeRed = {}));
// $(document).ready(function () {
//     console.log("Document loaded")
//    $(".dynamicstuff").html("Hello World from " + CodeRed.Common.domainName);
// });  

var CodeRed;
(function (CodeRed) {
    var Data;
    (function (Data) {
        Data.serviceName = "getData";
        var DataService = (function () {
            function DataService() {
            }
            DataService.getData = function () {
                var deferred = jQuery.Deferred();
                $.ajax({
                    url: "/api/webapi",
                    headers: {
                        Accept: "application/json;odata=verbose"
                    },
                    success: function (data) {
                        deferred.resolve(data);
                    },
                    error: function (jQxhr, errorCode, errorThrown) {
                        deferred.reject({
                            errorCode: errorCode,
                            error: errorThrown
                        });
                    }
                });
                return deferred;
            };
            return DataService;
        }());
        Data.DataService = DataService;
    })(Data = CodeRed.Data || (CodeRed.Data = {}));
})(CodeRed || (CodeRed = {}));

var CodeRed;
(function (CodeRed) {
    var Log;
    (function (Log) {
        var LogService = (function () {
            function LogService() {
            }
            LogService.debug = function (message) {
                var optionalParams = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    optionalParams[_i - 1] = arguments[_i];
                }
                console.debug(message, optionalParams);
            };
            LogService.warn = function (message) {
                var optionalParams = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    optionalParams[_i - 1] = arguments[_i];
                }
                console.warn(message, optionalParams);
            };
            LogService.error = function (message) {
                var optionalParams = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    optionalParams[_i - 1] = arguments[_i];
                }
                console.error(message, optionalParams);
            };
            LogService.info = function (message) {
                var optionalParams = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    optionalParams[_i - 1] = arguments[_i];
                }
                console.log(message, optionalParams);
            };
            return LogService;
        }());
        Log.LogService = LogService;
    })(Log = CodeRed.Log || (CodeRed.Log = {}));
})(CodeRed || (CodeRed = {}));

//import * as $ from "jquery";
//var $ = require('jquery');
/// <reference path="../node_modules/@types/jquery/index.d.ts" />
// import { sayHello } from "./greet";
// function showHello(divName: string, name: string) {
//     const elt = document.getElementById(divName);
//     elt.innerText = sayHello(name);
// }
//showHello("greeting", "TypeScript"); 
// function showHi(name: string) {
//     var elt = $("#greeting");
//     elt.innerText = "Hello World JQuery";
// }
// $( document ).ready(function(){
//     var elt = $("#greeting");
//     elt.innerText = "Hello World JQuery";
// })
// $(function(){
//     var elt = $("#greeting");
//     if(elt.length > 0){
//         elt[0].innerText = "Hello World JQuery";
//     }
//     var v=1;
// })
$(document).ready(function () {
    console.log("Document loaded");
    CodeRed.Data.DataService.getData().done(function (data) {
        $(".dynamicstuff").html("Hello World4 from " + CodeRed.Common.domainName);
        for (var i = 0, j = data.length; i < j; i++) {
            var item = data[i];
            $(".dynamicstuff").append("<div>" + item + "</div>");
        }
    }).fail(CodeRed.Log.LogService.error);
});
// fail(function (error) { alert(error) }
// var elt = $("#greeting");
// elt.innerText = "Hello World JQuery";
