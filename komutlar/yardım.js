const Discord = require("discord.js");
const db = require('quick.db');
exports.run = (client, message, args) => {

  let every = message.guild.roles.find(r => r.name === '@Dux Confirmatus ⚒')
  
     .setAuthor("Prefixim `.`")
     .setAuthor("`.erkek @KişininEtiketi İsim Yaş`")
     .setAuthor("`.kadın @KişininEtiketi İsim Yaş`")
     .setAuthor("`bazen yetki veremiyor olabilir veya ismi değişmiyor olabilir lütfen kayıt ettikten sonra kontorl ediniz.")
     .setColor("WHITE")
     
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yardım", "k"],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: "",
  usage: "yardım"
};
   