const Discord = require('discord.js');

exports.run = (client, message, args) => {
  var tagdakiler = 0;
  let tag = "♱";
  message.guild.members.forEach(member => {
    if(member.user.username.includes(tag)) {
      tagdakiler = tagdakiler+1
    }
  })
  message.channel.send("<a:ucgenn:698988466083463188>  "  + tagdakiler + " Kişi Taga Sahip!")
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