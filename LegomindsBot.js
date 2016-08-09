var Discord = require('discord.io');
var bot = new Discord.Client({
    token: "",
    autorun: true
});

bot.on('ready', function() {
    console.log(bot.username + " - (" + bot.id + ")");
});

bot.on('message', function(user, userID, channelID, message, event) {
    if (message === "##ping") {
        bot.sendMessage({
            to: channelID,
            message: "pong"
        });
    }
});

bot.on('message', function(user, userID, channelID, message, event) {
    if (message === "##Hello") {
        bot.sendMessage({
            to: channelID,
            message: "Hello!"
        });
    }
});

bot.on('message', function(user, userID, channelID, message, event) {
    if (message === "##join") {
        bot.sendMessage({
            to: channelID,
            message: "Joining Voice"
        });
    }
});
