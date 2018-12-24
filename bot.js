const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("526790430403067934")
setInterval(function() {
channel.send(`hytham the king of lol~s`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
