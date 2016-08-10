//Variables and background things//
const Discord = require('discord.js');
var client = new Discord.Client();
var prefix = "##"
var bitrate = "96"
var currentgame = "Not playing anything"
var song = "Nothing"
var streaming = "Discord.js"
var volume = "100"
var Auth = require("./auth.json");
var getid = require("./id.js");
var tempid = ""

//Startup Things//

//Uses Discord Auth to connect to the bot//
client.loginWithToken(Auth, output);

function output(error, token) {
        if (error) {
                console.log('There was an error logging in: ' + error);
                return;
        } else
                console.log('Logged in. Token: ' + token);
}

//Displays how many servers the bot is on//
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
		client.reply(message, "Pong!" + message.timestamp);
	}
});


client.on("message", function(message){
	if (message.content.startsWith(prefix + "Help")){
		client.reply(message, "I've sent you some help.");
		client.sendMessage(message.author, "Here you go!");
		client.sendMessage(message.author, "https://github.com/OfficialLegominds/Legominds_Bot/blob/master/Commands.md");
		client.sendMessage(message.author, "Want to add the bot to a server? https://discordapp.com/oauth2/authorize?&client_id=212563097565659136&scope=bot");
		client.deleteMessage(message);
	}
});


client.on("message", function(message){
	if (message.content.startsWith(prefix + "Delete")){
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


//Game and streaming//

client.on("message", function(message){
	if (message.content.startsWith(prefix + "Game")){
		client.setPlayingGame(currentgame);
		client.reply(message, "Set current Game to: " + currentgame);
		client.deleteMessage(message);
	}
});

client.on("message", function(message){
	if (message.content.startsWith(prefix + "Stream")){
		client.setStreaming(streaming, "<Stream Link>", 1)
		client.reply(message, "Set streaming to: " + streaming);
		client.deleteMessage(message);
	}
});


//Voice Stuff//

client.on("message", function(message){
	if (message.content.startsWith(prefix + "Bitrate")){
		client.reply(message, "Current Bitrate: "+ bitrate);
		client.setChannelBitrate("<id here>", bitrate);
		client.deleteMessage(message);		
	}
	//else{
	//	client.reply(message, "Set the Bitrate to: " + bitrate);
	//}
});

client.on("message", function(message){
	if (message.content.startsWith(prefix + "Now")){
		client.reply(message, "Currently playing: " + song);
		client.deleteMessage(message);
	}
});

client.on("message", function(message){
	if (message.content.startsWith(prefix + "Leave")){
		client.reply(message, "I have left Voice.");
		client.leaveVoiceChannel();
		client.deleteMessage(message);
	}
});

client.on("message", function(message){
	if (message.content.startsWith(prefix + "Join")){
		tempid = message.author
		//client.reply(message, "Joining Voice.");
		//client.joinVoiceChannel(message.channel);
		console.log(tempid);
		//client.deleteMessage(message);
	}
});

client.on("message", function(message){
	if (message.content.startsWith(prefix + "Play")){
		playFile("C:\Users\ryank\Desktop\song.mp3", volume);
		client.joinVoiceChannel(user);
		client.deleteMessage(message);
	}
});

client.on("message", function(message){
	if (message.content.startsWith(prefix + "Pause")){
		client.reply(message, "Music Paused.");
		pause()
		client.deleteMessage(message);
	}
});


//Misc//

client.on("message", function(message){
	if (message.content.startsWith(prefix + "EnableNSFW")){
		client.reply(message, "You now have access to NSFW areas.");
		client.roles.get("name", "NSFW");
		client.addMemberToRole(message.author, NSFW);
		client.deleteMessage(message);
	}
});

