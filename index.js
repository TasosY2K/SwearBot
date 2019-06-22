const Discord = require('discord.js');
const request = require('request');

const bot = new Discord.Client();

let prefix = "?"

bot.login("NTkxNzAzOTU5MzgzODM0NjM4.XQ0pSA.MmXQ8hP-V2QecMGozWgZ9LwYXYI");

bot.on('ready', async (guild) => {
    let invite = await bot.generateInvite(["ADMINISTRATOR"]);
    console.log("invite =>", invite);
});

bot.on("guildCreate", async (guild) => {

});

bot.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);


    request(`https://www.purgomalum.com/service/containsprofanity?text=${messageArray.toString()}`, (err, res, body) => {
      if (body === "true") {
        request(`https://insult.mattbas.org/api/insult`, (err, res, body) => {
          message.reply(body);
        })
      }
    })

});
