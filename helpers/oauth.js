var credentials = require("../credentials/app_credentials");
var request = require("request");

var client = credentials;
client.redirectUri = "http://www.slackershub.club/oauth";

var oauth = {
	client: client,
	getToken: function(code){
		var url = this.buildTokenUrl(code);

		request.get(url,function(req,res){
			var authorization = JSON.parse(res.body);

		})
	},
	buildTokenUrl:function(code){
		console.log("generating url");
		var url = "https://slack.com/api/oauth.access" + 
					"?client_id=" + this.client.client_id +
					"&client_secret=" + this.client.client_secret+
					"&code=" + code + 
					"&redirect_uri=" + this.client.redirectUri 

		return url;
	}
}

module.exports = oauth;
