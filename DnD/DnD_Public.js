///Variables and background things///
const Discord = require('discord.js');
const Roll20 = require('discord.js');
var client = new Discord.Client();
var prefix = "@@"
var song = "Nothing"
var nextgame = "Saturday August 20 5:00PM GMT+1"

client.loginWithToken('', output);

function output(error, token) {
        if (error) {
                console.log('There was an error logging in: ' + error);
                return;
        } else
                console.log('Logged in. Token: ' + token);
}

client.on("ready", function() {
	console.log("Servers: " + client.servers.length);
});


//client.setPlayingGame("test", callback);


///Non-Voice Commands///

client.on("message", function(message){
	if (message.content.startsWith(prefix + "Ping")){
		client.reply(message, "Pong!");
	}
});

client.on("message", function(message){
	if (message.content.startsWith(prefix + "Next")){
		client.reply(message, "The next game is: " + nextgame);
		client.deleteMessage(message);
	}
});

client.on("message", function(message){
	if (message.content.startsWith(prefix + "Help")){
		client.reply(message, "I've sent you some help.");
		client.sendMessage(message.author, "Here you go!");
		client.sendMessage(message.author, "https://github.com/OfficialLegominds/Legominds_Bot/blob/master/Commands.md");
		client.deleteMessage(message);
	}
});

client.on("message", function(message){
	if (message.content.startsWith(prefix + "GameOn")){
		client.setPlayingGame("DnD on Roll20");
		client.reply(message, "DnD game is now on.");
		client.deleteMessage(message);
	}
});

client.on("message", function(message){
	if (message.content.startsWith(prefix + "GameOff")){
		client.setPlayingGame("");
		client.reply(message, "The game has ended.");
		client.deleteMessage(message);
	}
});

client.on("message", function(message){
	if (message.content.startsWith(prefix + "Link")){
		client.reply(message, "Here is a link to Roll20");
		client.sendMessage(message.author, "https://roll20.net");
		client.deleteMessage(message);
	}
});