const Discord = require("discord.js")

var bot = new Discord.Client(); 

bot.on("ready",function() {
    bot.user.setGame("Aider les utilisateurs !help");
    console.log("Le bot OMNARIEL est connécter :)");
});

bot.login("NDMxNTE2MDUxMzg2MjY5NzA0.DbES1A.6zZgwiZU4LUlgzM6IkyzADCUXCo");
