/// <reference path="../../node_modules/@types/jquery/index.d.ts" />

module CodeRed.Common {
    export var domainName = "code-red.dk";
}

$(document).ready(function () {
   $(".dynamicstuff").html("Hello World from " + CodeRed.Common.domainName);
}); 