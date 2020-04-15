const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send('<a:elysiontac:699938882761785354> <@533650583215800320> Sunucu Sahibi').then(message => {

 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kralı etiketler'],
  permLevel: 0
};

exports.help = {
  name: 'kurucu',
  description: 'şizoyuetiketler.',
  usage: 'kurucu'
};
   