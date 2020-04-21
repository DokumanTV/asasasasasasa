const Discord = require('discord.js');
const client = new Discord.Client();
const dogrulandi = client.emojis.find(emoji => emoji.name === "kirmizimsitik");

exports.run = (client, message) => {
   message.channel.send('`仒` **Ailemize Hoş Geldin** <a:mavimsitik:701864536743084194>').then(message => {
     const embed = new Discord.RichEmbed()
     message.react(dogrulandi)
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
   