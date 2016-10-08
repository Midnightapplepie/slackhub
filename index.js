var https = require('https');
var http = require('http');
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var path = require("path");
var request = require("request");
var oauth = require("./helpers/oauth");
// var fs = require('fs');

// var privateKey = fs.readFileSync(path.resolve(__dirname + "/credentials/key.pem"),"utf8");
// var certificate = fs.readFileSync(path.resolve(__dirname + "/credentials/cert.pem"),"utf8");


// var httpsServer = https.createServer({key: privateKey, cert: certificate},app);
// var httpServer = http.createServer(app);

var allowCrossDomain = function(req, res, next){
	res.header('Access-Control-Allow-Origin', '*');
  	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
  	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
	next()
}

app.use(allowCrossDomain);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var slackChannel = "https://hooks.slack.com/services/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";

var user = {
		username: "The-Others",
		icon_emoji: ":robot_face:",
	}

app.get("/",function(req,res){

	res.sendFile(path.resolve(__dirname + "/index.html"));
});

app.post("/send-message",function(req,res){
	var data = req.body;
	user.text = data.msg;

	request
		.post({url: slackChannel,
			   form: JSON.stringify(user)},
			   function(err,res,body){
					console.log(body)
				});
	res.redirect("/");
});

app.get("/oauth",function(req,res){
	var code = req.query.code;
	console.log(oauth);
	oauth.buildTokenUrl(code);
	res.send(code);
})

app.post("/dare",function(req,res){
	var handler = require('./helpers/dare');
	var response = handler.handleMessage(req.body);
	console.log(req.body);

	res.send(response);
})

app.listen(9000);

// httpServer.listen(3030,function(){
// 	console.log("http on 3030")
// })
// httpsServer.listen(3000,function(){
// 	console.log("server running at 3000")
// });