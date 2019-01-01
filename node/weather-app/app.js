
const request = require('request');
const yargs= require('yargs');
const fs = require ('fs');

const argv = yargs
  .options({
  	  a: {
  	  	demand:true,
  	  	alias:'address',
  	  	describe:'Address to fetch weather for',
  	  	string:true
  	  }
  })
  .help()
  .alias('help','h')
  .argv;

console.log(argv);
var encodedAddress= encodeURIComponent(argv.address);
console.log('https://maps.googleapis.com/maps/api/geocode/json?address='+encodedAddress+'&key=AIzaSyAuybMg3Qx-5ExSmSl0qRoQGqvlwKN4Rg8');
request({
	url:'https://maps.googleapis.com/maps/api/geocode/json?address='+encodedAddress+'&key=AIzaSyAuybMg3Qx-5ExSmSl0qRoQGqvlwKN4Rg8',
	json:true
},(error, response, body)=>{
  console.log(JSON.stringify(response , undefined , 2));
   // console.log(body.results[0].geometry.location.lat);
   // console.log(body.results[0].geometry.location.lng);
   
});