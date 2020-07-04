require('dotenv').config();
const Discord = require('discord.js');
const request = require('request');
const secret = process.env;
const bot = new Discord.Client();

bot.login(secret.TOKEN);

bot.on('ready', async guild => {
    bot.user.setActivity(`${bot.guilds.size} guilds | bit.ly/swear-bot`, {type: 'WATCHING'});
    console.log(`${bot.user.username} is ready!\nInvite => ${await bot.generateInvite(["ADMINISTRATOR"])}`);
});

bot.on("guildCreate", async guild => {
    bot.user.setActivity(`${bot.guilds.size} guilds | bit.ly/swear-bot`, {type: 'WATCHING'});
    let channel = bot.channels.get(guild.systemChannelID);
    if (!channel) return;
    let embed = new Discord.RichEmbed()
      .setColor('#'+(Math.random()*0xFFFFFF<<0).toString(16))
      .setTitle(`I am **${bot.user.username}**, and you better watch your mouth while im in **${guild.name}**`)
      .addField("Made by", "**(Lean)#1337**")
      .addField("Links", `[GitHub](https://github.com/TasosY2K/SwearBot)\n[Website](https://bot.ly/swear-bot)\n[Invite](${await bot.generateInvite(["ADMINISTRATOR"])})`)
    channel.send(embed);
});

bot.on("guildDelete", async guild => {
  bot.user.setActivity(`${bot.guilds.size} guilds | bit.ly/swear-bot`, {type: 'WATCHING'});
});

bot.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    request(`https://www.purgomalum.com/service/containsprofanity?text=${message.content.toString()}`, (err, res, body) => {
      if (body === "true") {
        request(`https://insult.mattbas.org/api/insult`, (err, res, body) => {
          message.reply(body);
        });
      }
    });
});
