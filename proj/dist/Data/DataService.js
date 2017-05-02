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
