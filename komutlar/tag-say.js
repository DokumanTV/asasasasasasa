const Discord = require('discord.js');

exports.run = (client, message, args) => {
  var tagdakiler = 0;
  let tag = "仒";
  message.guild.members.forEach(member => {
    if(member.user.username.includes(tag)) {
      tagdakiler = tagdakiler+1
    }
  })
  message.channel.send("<a:brave:701865068467322921> "  + tagdakiler + " Taglı Üyemiz Var.")
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["tagsay"]
};

exports.help = {
  name: 'tagsay',
  description: 'Tagdakileri Sayar',
  usage: 'tagsay'
};