///Variables and background things///
const Discord = require('discord.js');
var client = new Discord.Client();
var prefix = "##"
var bitrate = "96"
var currentgame = "Use ##Help"
var song = "Nothing"
var streaming = "Discord.js"
var volume = "100"

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
	if (message.content.startsWith(prefix + "Help")){
		client.reply(message, "I've sent you some help.");
		client.sendMessage(message.author, "Here you go!");
		client.sendMessage(message.author, "https://github.com/OfficialLegominds/Legominds_Bot/blob/master/Commands.md");
		client.sendMessage(message.author, "Want to add the bot to a server? https://discordapp.com/oauth2/authorize?&client_id=212563097565659136&scope=bot");
		client.deleteMessage(message);
	}
});

client.on("message", function(message){
	if (message.content.startsWith(prefix + "Join")){
		client.reply(message, "Joining Voice.");
		client.joinVoiceChannel("");
		//client.playFile("C:\Users\ryank\Desktop\song.mp3", volume);
		client.deleteMessage(message);
	}
});

client.on("message", function(message){
	if (message.content.startsWith(prefix + "Leave")){
		client.reply(message, "I have left Voice.");
		client.leaveVoiceChannel("");
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
	if (message.content === ("Prefix" + "")){
		client.reply(message, "Set the prefix to " + prefix);
		client.deleteMessage(message);
	}
});


///Game and streaming///

client.on("message", function(message){
	if (message.content.startsWith(prefix + "Game")){
		client.setPlayingGame(currentgame);
		client.reply(message, "Set current Game to: " + currentgame);
		client.deleteMessage(message);
	}
});

client.on("message", function(message){
	if (message.content.startsWith(prefix + "Stream")){
		client.setStreaming(streaming, "https://www.twitch.tv/legominds", 1)
		client.reply(message, "Set streaming to: " + streaming);
		client.deleteMessage(message);
	}
});


///Voice Stuff///

client.on("message", function(message){
	if (message.content.startsWith(prefix + "Bitrate")){
		client.reply(message, "Current Bitrate: "+ bitrate);
		client.setChannelBitrate("", bitrate);
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
