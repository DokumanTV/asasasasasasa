const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send('**金 Ailemize Hoş Geldin** <a:mavimsitik:701864536743084194>').then(message => {

 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['tagı yazar'],
  permLevel: 0
};

exports.help = {
  name: 'tag',
  description: 'Tagı Atar.',
  usage: 'tag'
};
   