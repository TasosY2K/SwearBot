require('dotenv').config();
const Discord = require('discord.js');
const {ShardingManager} = require('discord.js');
const bot = new Discord.Client();

const secret = process.env;

const manager = new ShardingManager(__dirname + "/bot.js", {token: secret.TOKEN})

manager.spawn('auto', 2000, true);
