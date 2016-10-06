

function handleMessage(incomming){
	var users = incomming.text.match(/@\S+/g);
	var response = {
		response_type: "ephemeral",
		text: incomming.user_name + " dared you for a ping pong match"
	}

	return response;
}

var actions = {
	handleMessage: handleMessage
}

module.exports = actions;