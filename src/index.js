require('dotenv').config();
const http = require('http');
const Discord = require('discord.js');
const {ShardingManager} = require('discord.js');
const bot = new Discord.Client();

const secret = process.env;

const manager = new ShardingManager(__dirname + "/bot.js", {token: secret.TOKEN})

manager.spawn('auto', 2000, true);

http.createServer((req, res) => {     
    res.writeHead(200, {'Content-Type': 'text/plain'});     
    res.end('SwearBot is running\n'); 
}).listen(process.env.PORT || 5000);