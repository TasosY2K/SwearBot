const Discord = require('discord.js');
const {ShardingManager} = require('discord.js');
const bot = new Discord.Client();

const secret = require('./config.json');

const manager = new ShardingManager("./bot.js", {token: secret.token})

manager.spawn('auto', 2000, true);
