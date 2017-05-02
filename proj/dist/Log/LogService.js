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
