//Variables and background things//
const Discord = require('discord.js');
var client = new Discord.Client();
var prefix = "@@"
var song = "Nothing"
var nextgame = "Saturday August 20 5:00PM GMT+1"
var Auth = require("./auth.json");
var dndhelp = require("./commands.txt");

//Startup things//

//Auth with Discord//
client.loginWithToken(Auth, output);

function output(error, token) {
        if (error) {
                console.log('There was an error logging in: ' + error);
                return;
        } else
                console.log('Logged in. DnD Bot. Token: ' + token);
}

client.on("ready", function() {
	console.log("Servers: " + client.servers.length);
});


//Makes the bot set game to help//
client.on("ready", function() {
	client.setPlayingGame(prefix + "Help | " +client.servers.length + " Servers");
});


//Non-Voice Commands//

client.on("message", function(message){
	if (message.content.startsWith(prefix + "Ping")){
		client.reply(message, "Pong!");
		console.log("Someone used Ping. " + message.author);
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
		client.sendMessage(message.author, dndhelp);
		client.deleteMessage(message);
	}
});

client.on("message", function(message){
	if (message.content.startsWith(prefix + "GameOn")){
		client.setPlayingGame("DnD on Roll20");
		client.reply(message, "DnD game is now on.");
		client.sendMessage(message, "@everyone The game is now on.");
		client.deleteMessage(message);
	}
});

client.on("message", function(message){
	if (message.content.startsWith(prefix + "GameOff")){
		client.setPlayingGame(prefix + "Help | " + client.servers.length + " Servers");
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

client.on("message", function(message){
	if (message.content.startsWith(prefix + "Servers")){
		client.reply(message, "Servers: " + client.servers.length);
		client.deleteMessage(message);
	}
});

client.on("message", function(message){
	if (message.content === (prefix + "Prefix")){
		client.reply(message, "Please provide a prefix. Current Prefix: " + prefix);
		client.deleteMessage(message);
	}
	if (message.content === (prefix + "Prefix " + "s")){
		client.reply(message, "Set the prefix to " + prefix);
		client.deleteMessage(message);
	}
});
