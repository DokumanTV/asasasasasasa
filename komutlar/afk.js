const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {
if(!message.member.nickname) {
  if(message.author.bot) return;
  db.set(`afk_${message.author.id}`, message.author.username)
  message.channel.sendMessage(message.author + '  artık AFK')
message.member.setNickname('[AFK] ' + message.author.username)
};
if(message.member.nickname) {
    if(message.author.bot) return;
let afk = await db.set(`afk_${message.author.id}`, message.member.nickname)
message.channel.sendMessage(message.author + '  artık AFK')
message.member.setNickname('[AFK] ' + message.member.nickname)
}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['afk'],
  permLevel: 0
};

exports.help = {
  name: 'afk',
  description: 'afk yapar',
  usage: 'afk'
};
