
module CodeRed.Data {
   export var serviceName = "getData";
   
   export class DataService {

       public static getData() : JQueryPromise<string[]> {
           var deferred = jQuery.Deferred <string[]>();

           $.ajax({
                url: "/api/webapi",
                headers: {
                    Accept: "application/json;odata=verbose"
                },
                success: (data) => {
                    deferred.resolve(data);
                },
                error: function(jQxhr, errorCode, errorThrown) {
                    deferred.reject({
                        errorCode: errorCode,
                        error: errorThrown
                    });
                }
           });

           return deferred 
       }
   }
}
