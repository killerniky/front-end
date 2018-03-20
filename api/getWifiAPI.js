var request = require("request");

function getData(callback){
   request('http://datasets.antwerpen.be/v4/gis/wifiopenbaar.json', function(error, response, body) {
       if (!error && response.statusCode == 200) {

           result = (JSON.parse(body));
           return callback(null, result);
       } else {
           return callback(error, null);
       }
   });
}

module.exports = {
    getData
};
