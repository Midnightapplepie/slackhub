var credentials = require("../credentials/app_credentials");
var request = require("request");

var client = credentials;
client.redirectUri = "http://www.slackershub.club/token";

var oauth = {
	client: client,
	getToken: function(url){
		request.get(url,function(req,res){

		})
	},
	buildTokenUrl:function(code){
		var url = "https://slack.com/api/oauth.access" + 
					"?client_id=" + this.client.client_id +
					"&client_secret=" + this.client.client_secret+
					"&cod=" + code + 
					"&redirect_uri=" + this.client.redirectUri 

		console.log(url);
	}
}

module.exports = oauth