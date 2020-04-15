const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send('``♱`` **Ailemize Hoş Geldin** <a:diamond:699932242897797180>').then(message => {

 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['balık', 'balıktut', 'balık-tut'],
  permLevel: 0
};

exports.help = {
  name: 'tag',
  description: 'Tagı Atar.',
  usage: 'tag'
};
   