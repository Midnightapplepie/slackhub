var request = require('request');

function dareMessage(incomming){
	var message = {
		text: incomming.user_name + " dared you for a match?",
		attachments: [
			{
				text: "kick his/her ass?",
				fallback: "You been Challenged",
				callback_id: "dared",
				attachment_type: "default",
				actions: [
					{
						name: "yes",
						text: "Hell Yeah!",
						type: "button",
						value: "yes"
					},
					{
						name: "no",
						text: "Hell No",
						type: "button",
						value: "no"
					},
					{
						name: "busy",
						text: "Me = Busy",
						type: "button",
						value: "busy"
					}
				]
			}
		]
	}
}

function handleMessage(incomming){
	var users = incomming.text.match(/@\S+/g);
	// var response = {
	// 	"response_type" : "ephemeral"
	// }
	// if (users){	
	// 	response.text = "you dared " + users[0]  + " for a match!!"
	// }else{
	// 	response.text = "who is " + incomming.text
	// }

	var response = dareMessage(incomming);

	var outgoing = {
		channel: "#" + incomming.channel_name,
		channel_id: incomming.channel_id
	}

	request.post({
		url: incomming.response_url,
		form: JSON.stringify()

	})

	return response;
}

var actions = {
	handleMessage: handleMessage,
	dareMessage: dareMessage
}

module.exports = actions;