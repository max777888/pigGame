const request = require('request');
request({
	url:'https://maps.googleapis.com/maps/api/geocode/json?address=48+eastwood+ave,+scarborough,+CA&key=AIzaSyAuybMg3Qx-5ExSmSl0qRoQGqvlwKN4Rg8',
	json:true
},(error, response, body)=>{
  console.log(body);
});