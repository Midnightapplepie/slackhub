var request = require('request');

function handleMessage(incomming){
	var users = incomming.text.match(/@\S+/g);
	var response = {
		"response_type" : "ephemeral",
		"text" : "you dared " + users[0] + " for a match!!"
	}
	var outgoing = {
		channel: "#" + incomming.channel_name,
		channel_id: incomming.channel_id,
		text
	}

	request.post({
		url: incomming.response_url,
		form: JSON.stringify()

	})

	return response;
}

var actions = {
	handleMessage: handleMessage
}

module.exports = actions;