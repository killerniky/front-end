var request = require("request");
function getData(callback){
   request('http://datasets.antwerpen.be/v4/gis/wifiopenbaar.json', function(error, response, body) {
       if (!error && response.statusCode == 200) {

           result = (JSON.parse(body));
           console.log(result);
           return callback(null, result);
       } else {
           return callback(error, null);
       }
   });
}

module.exports = {getData};

// example json
// id: '88',
//     objectid: '19140',
//     point_lat: '51.27631600755500',
//     point_lng: '4.42452057930250',
//     id_wifi: '31',
//     klant: 'Stad',
//     locatie: 'DH Ekeren',
//     straat: 'Veltwijcklaan',
//     huisnr: '27',
//     postcode: '2180',
//     gemeente: 'Ekeren',
//     huidige_dekking: 'gedeeltelijk',
//     private: 'ja',
//     private_mobile: 'ja',
//     wifi_balie: 'ja',
//     lokale_wifi: null,
//     museumtracker: null,
//     wireless_scholen: null,
//     zb_alarm: null,
//     bewoner: null,
//     stad_gratis_wifi: 'ja',
//     stad_gratis_wifi_citymesh: null,
//     aanvraag_uitbreiding: 'via ETI - K13000125',
//     geraamd_budget: '20000',
//     timing: 'Q1  2014',
//     opmerking: null,
//     shape: null },
