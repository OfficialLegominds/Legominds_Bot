const Discord = require('discord.js');
var client = new Discord.Client();
var prefix = "##"

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
		//joinVoiceChannel(channel, callback);
		client.deleteMessage(message);
	}
});

client.on("message", function(message){
	if (message.content.startsWith(prefix + "Leave")){
		client.reply(message, "I have left the Voice.");
		//client.destroy();
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
	}
});

client.on("message", function(message){
	if (message.content === ("Prefix" + "")){
		client.reply(message, "Set the prefix to " + prefix);
	}
});
