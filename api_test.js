var credentials = require('./credentials/app_credentials');
var request = require("request");

var api_base = 'https://slack.com/api';
var rtm = '/rtm.start'
var token = "?token=" + credentials.test_token + "&pretty=1"

request.get(api_base + rtm + token,function(req,res){
	// console.log(api_base + rtm + token);
	var data = JSON.parse(res.body)
	console.log(Object.keys(data));
	console.log(data.users);
});